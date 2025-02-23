import { useEffect, useState } from "react";
import { DateInput } from "@mantine/dates";
import "./TerminsPage.styles.css";
import { generateSlots } from "../../../utils/slot-generators";
import { useDispatch } from "react-redux";
import { setFocusedTermin } from "../../../redux/terminSlice/terminSlice";
import { setCurrentPage } from "../../../redux/routerSlice/routerSlice";

export const TerminsPage = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState<Date | null>(null);

  const handleFocusTermin = (slot: any) => {
    dispatch(setFocusedTermin(slot));
    dispatch(setCurrentPage("termin"));
  };

  return (
    <div className="termin-page-container">
      <div className="datepicker-container">
        <DateInput
          value={date}
          onChange={setDate}
          label="Date input"
          placeholder="Date input"
        />
      </div>
      <div className="timeslots-container">
        {generateSlots().map((slot) => (
          <div
            className="timeslot"
            key={slot.id}
            onClick={() =>
              handleFocusTermin({ ...slot, date: date ?? new Date() })
            }
          >
            {slot.start} - {slot.end}
          </div>
        ))}
      </div>
    </div>
  );
};
