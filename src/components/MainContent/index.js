import { FaHorse, FaHorseHead } from "react-icons/fa";

function MainContent() {
  let name = "Duong Trung Quoc";
  let age = 22;
  const css = {
    // color: "white",
    // backgroundColor: "black"
  };

  return (
    <>
      <div className="box">
        <div className="test" style={css}>
          My name is {name}
        </div>
        <div className="test" style={css}>
          I'm {age} years old
        </div>
        <div className="icon">
          <FaHorse /> <FaHorseHead />
        </div>

      </div>

    </>
  )
}

export default MainContent;