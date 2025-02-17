export const generateSlots = () => {
const slotIds = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9", "slot10", "slot11", "slot12", "slot13"];
const slots = [];
const openingHour = 12;
const closingHour = 20;
const slotDuration = 2;
const interval = 0.5;

for (let hour = openingHour; hour < closingHour; hour += interval) {
    const start = hour;
    const end = hour + slotDuration;
    if (end <= closingHour) {
        const id:typeof slotIds[0] = slotIds[slots.length % slotIds.length];
        slots.push({ id, start, end });
    }
}
return slots;
}