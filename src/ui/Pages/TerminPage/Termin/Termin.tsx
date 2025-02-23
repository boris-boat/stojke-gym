import { Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { supabase } from "../../../../utils/supabase";
import "./Termin.styles.css";
import { CapacityInfo } from "../../../../components/shared/CapacityInfo/CapacityInfo";
import { useEffect, useState } from "react";

export const Termin = () => {
  const termin = useSelector((state: any) => state.termin.selectedTermin);
  const currentUser = useSelector((state: any) => state.auth.currentUser);
  const [unavailableSlot, setUnavailableSlot] = useState<number | undefined>(
    undefined,
  );
  const adjustedDate = new Date(termin.date);
  adjustedDate.setHours(12, 0, 0, 0);
  const formattedDate = `${adjustedDate.getDate().toString().padStart(2, "0")} ${(
    adjustedDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")} ${adjustedDate.getFullYear()}`;

  const handleMakeReservation = async () => {
    const { error, data } = await supabase.from("user_slot_selections").insert({
      user_id: currentUser.id,
      slot_start: termin.start,
      slot_end: termin.end,
      date: formattedDate,
    });
    console.log(data, error);
  };

  const getCurrentSlotAvailability = async () => {
    const { error, data } = await supabase
      .from("user_slot_selections")
      .select()
      .eq("date", formattedDate)
      .eq("slot_start", termin.start)
      .eq("slot_end", termin.end);
    console.log(data);
    setUnavailableSlot(data?.length);
  };

  useEffect(() => {
    getCurrentSlotAvailability();
  }, []);

  return (
    <div className="termin-container">
      {unavailableSlot !== undefined ? (
        <>
          <h1>Izabrani Termin</h1>
          <h3>{termin.date.toLocaleDateString()}</h3>
          <h3>
            {termin.start} - {termin.end}
          </h3>
          <CapacityInfo filled={unavailableSlot} />
          <Button
            onClick={() => {
              handleMakeReservation();
            }}
          >
            Rezervisi
          </Button>
        </>
      ) : (
        <h1>Ucitavam mogucnost rezervacije</h1>
      )}
    </div>
  );
};
