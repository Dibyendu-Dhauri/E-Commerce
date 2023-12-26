import React, { useEffect, useState } from "react";
import "./Price.scss";
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

interface PriceProps {
  products: ProductTypes[];
  setProducts: React.Dispatch<React.SetStateAction<ProductTypes[]>>;
}
const Price: React.FC<PriceProps> = ({ products, setProducts }) => {
  const [selectPrice, setSelectPrice] = useState<string[]>([]);
  const [getAllData, setGetAllData] = useState<ProductTypes[]>([]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectPrice((prevCategories) => {
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
      if (selectPrice.length === 0) {
        // If no price range is selected, display all products
        setProducts(getAllData);
      } else {
        // Filter products based on selected price range
        const filteredProducts = getAllData.filter((product) => {
          // Adjust the conditions based on your specific price ranges
          if (selectPrice.includes("under500")) {
            if (product.price <= 500) {
              return true;
            }
          }
          if (selectPrice.includes("500to1000")) {
            if (product.price >= 500 && product.price <= 1000) {
              return true;
            }
          }
          return false;
        });

        setProducts(filteredProducts);
      }
    };
    filterProducts();
  }, [selectPrice]);
  return (
    <div className="priceContainer">
      <h1>{"Price range"}</h1>
      <div className="priceItem">
        <input
          type="checkbox"
          value={"under500"}
          onChange={handleCheckboxChange}
          checked={selectPrice.includes("under500")}
        />
        <span>{"under 500"}</span> <br />
        <input
          type="checkbox"
          value={"500to1000"}
          onChange={handleCheckboxChange}
          checked={selectPrice.includes("500to1000")}
        />
        <span>{"500 to 1000"}</span>
      </div>
    </div>
  );
};
export default Price;
