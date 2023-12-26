import React, { useEffect, useState } from "react";
import star1 from "../../../assets/1star.png";
import star2 from "../../../assets/2star.png";
import star3 from "../../../assets/3star.png";
import star4 from "../../../assets/4star.png";
import star5 from "../../../assets/5Star.png";
import "./Rating.scss";
import { fetchData } from "../../../utils/fetchData";

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

interface RatingProps {
  products: ProductTypes[];
  setProducts: React.Dispatch<React.SetStateAction<ProductTypes[]>>;
}
const Rating: React.FC<RatingProps> = ({ products, setProducts }) => {
  const [chooseRating, setChooseRating] = useState<string[]>([]);
  const [getAllData, setGetAllData] = useState<ProductTypes[]>([]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setChooseRating((prevCategories) => {
      if (prevCategories.includes(value)) {
        // If the category is already in the list, remove it
        return prevCategories.filter((category) => category !== value);
      } else {
        // If the category is not in the list, add it
        return [...prevCategories, value];
      }
    });
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchData();
        setGetAllData(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      if (chooseRating.length === 0) {
        // If no ratings are selected, display all products
        setProducts(getAllData);
      } else {
        // Filter products based on selected ratings
        const filteredProducts = getAllData.filter((product) =>
          chooseRating.includes(Math.floor(product.rating.rate).toString())
        );

        setProducts(filteredProducts);
      }
    };
    filterProducts();
  }, [chooseRating]);
  return (
    <div className="ratingContainer">
      <h1>{"Ratings"}</h1>
      <div className="ratingItem">
        <input
          type="checkbox"
          value={"5"}
          onChange={handleCheckboxChange}
          checked={chooseRating.includes("5")}
        />
        <img src={star5} alt="star" /> <br />
        <input
          type="checkbox"
          value={"4"}
          onChange={handleCheckboxChange}
          checked={chooseRating.includes("4")}
        />
        <img src={star4} alt="star" /> <br />
        <input
          type="checkbox"
          value={"3"}
          onChange={handleCheckboxChange}
          checked={chooseRating.includes("3")}
        />
        <img src={star3} alt="star" /> <br />
        <input
          type="checkbox"
          value={"2"}
          onChange={handleCheckboxChange}
          checked={chooseRating.includes("2")}
        />
        <img src={star2} alt="star" /> <br />
        <input
          type="checkbox"
          value={"1"}
          onChange={handleCheckboxChange}
          checked={chooseRating.includes("1")}
        />
        <img src={star1} alt="star" />
      </div>
    </div>
  );
};
export default Rating;
