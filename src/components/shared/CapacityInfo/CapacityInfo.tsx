import "./CapacityInfo.styles.css";

export const CapacityInfo = ({ filled = 2 }) => {
  const totalSlots = 3;

  const display = [];
  for (let i = 0; i < filled; i++) {
    display.push("filled");
  }
  for (let i = filled; i < totalSlots; i++) {
    display.push("available");
  }
  console.log(filled);
  return (
    <div className="container">
      {display.map((slot, index) => (
        <div key={index} className={slot}>
          {index}
        </div>
      ))}
    </div>
  );
};
