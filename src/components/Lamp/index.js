import { useState } from "react";

function Lamp() {
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus(!status);
  }
  return (
    <>
      <button onClick={handleClick}>
        {status ? "Turn off" : "Turn on"}
      </button>

      <div>
        {status ? "Lamp is on" : "Lamp is off"}
      </div>
    </>
  )
}

export default Lamp;