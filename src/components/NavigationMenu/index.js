function NavigationMenu() {

  // Sự kiện khi click
  const handleClick = (e) => {
    console.log(e.target);
  }
  // Sự kiện khi thay đổi - change
  const handleChange = (e) => {
    console.log(e.target.value);
  }
  // Sự kiện khi click vào input
  const handleFocus = (e) => {
    e.target.classList.add("input--active");
  }
  // Sự kiện khi click ra chỗ khác
  const handleBlur = (e) => {
    e.target.classList.remove("input--active");
  }
  // Sự kiện khi click nút của form
  const handleSubmit = (e) => {
    // Hủy load lại trang mặc định của event e
    e.preventDefault();
    console.log(e.target[0].value);
  }
  return (
    <>
      <div className="box">
        <div>NavigationMenu</div>
        <form onSubmit={handleSubmit}>
          <input className="input" type="text"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button onClick={handleClick}>Search</button>
        </form>
      </div>

    </>
  )
}

export default NavigationMenu;