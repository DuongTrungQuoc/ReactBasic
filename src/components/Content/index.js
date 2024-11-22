function Content(props) {
  const { text, number } = props;
  let classBorder = "";
  if (props.border) {
    classBorder = " box--border";
  }
  return (
    <>
      <div className={"box " + (props.active ? "box--active" : "box--noactive") + classBorder}>
        {text} - {number}
      </div>
    </>
  )
}

export default Content;