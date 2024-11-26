import { useState } from "react";
import "./Cart.scss";

function Cart() {
  const unitPrice = 120000;
  // let quantity = 1;
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    const updateQuantity = parseInt(e.target.value);
    setQuantity(updateQuantity);
  }
  return (
    <>
      <table className="cart">
        <thead>
          <tr>
            <th>Ten san pham</th>
            <th>So luong</th>
            <th>Don gia</th>
            <th>Thanh tien</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Giay</td>
            <td>
              <input defaultValue={quantity} type="number" min={1} onChange={handleChange} />
            </td>
            <td>{unitPrice}</td>
            <td> {quantity * unitPrice} </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Cart;