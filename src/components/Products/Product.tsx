import React, { useState } from "react";
import "./Product.scss";
import star2 from "../../assets/2star.png";
import star3 from "../../assets/3star.png";
import star4 from "../../assets/4star.png";
import star5 from "../../assets/5Star.png";
import star1 from "../../assets/1star.png";
import { FiHeart } from "react-icons/fi";

interface RatingType {
  rate: number;
  count: number;
}

interface ProductTypes {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
}
interface ProductProps {
  products: ProductTypes[];
}
const Product: React.FC<ProductProps> = ({ products }) => {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  const starImages = [star1, star2, star3, star4, star5];
  const handleLikeToggle = (productId: number) => {
    setLikedProducts((prevLikedProducts) =>
      prevLikedProducts.includes(productId)
        ? prevLikedProducts.filter((id) => id !== productId)
        : [...prevLikedProducts, productId]
    );
  };
  return (
    <div className="productContainer">
      {products &&
        products.map((item) => (
          <div className="singleProduct" key={item.id}>
            <div style={{ position: "relative" }}>
              <img src={item.image} alt="img" className="productImg" />
              <div className="viewProductText">View Product</div>
            </div>
            <span className="productTitle">{item.title.slice(0, 20)}</span>
            <span className="productPrice">Rs.{item.price}</span>
            <div style={{ display: "flex" }}>
              <img
                src={starImages[Math.floor(item.rating.rate) - 1]}
                alt="raing"
                className="productRatingImg"
              />
              <span className="productRating">({item.rating.count})</span>
            </div>
            <FiHeart
              className={`wishImg ${
                likedProducts.includes(item.id) ? "liked" : ""
              }`}
              onClick={() => handleLikeToggle(item.id)}
            />
          </div>
        ))}
    </div>
  );
};

export default Product;
