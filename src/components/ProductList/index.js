import { productList } from "../../data/product";
import ProductItem from "./ProductItem";

function ProductList() {
  console.log(productList);

  return (
    <>
      <div className="product__list" style={{ display: "flex" }}>
        {productList.map((item, index) => (
          <ProductItem item={item} key={item.id} />
        ))}

      </div>
    </>
  )
}

export default ProductList;