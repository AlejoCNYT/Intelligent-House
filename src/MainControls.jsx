import { useContext } from "react";
import SmartHomeContext from "./SmartHomeContext";

export function MainControls() {
  const { dispatch } = useContext(SmartHomeContext);

  return (
    <div style={{ display: "flex", gap: "0.5rem", paddingTop: "0.5rem" }}>
      <button onClick={() => dispatch?.({ type: "allOn" })}>All On</button>
      <button onClick={() => dispatch?.({ type: "allOff" })}>All Off</button>
    </div>
  );
}

export default MainControls;
