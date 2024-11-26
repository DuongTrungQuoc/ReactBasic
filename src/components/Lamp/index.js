import { useState } from "react";
import "./Lamp.scss"
function Lamp() {
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus(!status);
  }
  return (
    <>
      <div className="lamp">
        <button className="lamp__button" onClick={handleClick}>
          {status ? "Turn off" : "Turn on"}
        </button>

        <div className="lamp__status">
          {status ? (
            <div className="lamp__status-on">

            </div>
          ) : (
            <div className="lamp__status-off">

            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Lamp;