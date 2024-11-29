import { useEffect, useState } from "react";
import "./Product.scss";
function UseEffectPagination() {
  const limit = 10;
  const [data, setData] = useState([]);
  const [pageActive, setPageActive] = useState(0);
  const [quantityPage, setQuantityPage] = useState(0);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setData(data.products);
        setQuantityPage(Math.ceil(data.total / limit));
      })
  }, [pageActive]);

  const handleClickPagi = (e) => {
    setPageActive(e);
  }
  // console.log(quantityPage);
  // console.log([...Array(quantityPage)]);

  return (
    <>
      <ul className="pagination">

        {[...Array(quantityPage)].map((item, index) => (
          <li className="pagination__item" key={index} onClick={() => handleClickPagi(index)}>{index + 1}</li>
        ))}
      </ul>

      <div className="product__list">
        {data.map(item => (
          <div className="product__item" key={item.id}>
            <div className="product__image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <h3 className="product__title">{item.title}</h3>
            <div className="product__price">
              {item.price}$
            </div>
          </div>
        ))}
      </div>


    </>
  )
}

export default UseEffectPagination;