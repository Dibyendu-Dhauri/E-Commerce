import React, { useEffect, useState } from "react";
import "./Categories.scss";
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

interface CategoriesProps {
  products: ProductTypes[];
  setProducts: React.Dispatch<React.SetStateAction<ProductTypes[]>>;
}
const Categories: React.FC<CategoriesProps> = ({ products, setProducts }) => {
  const [categoryItems, setCategoryItems] = useState<string[]>([]);
  const [getAllData, setGetAllData] = useState<ProductTypes[]>([]);

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
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCategoryItems((prevCategories) => {
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
    const filterProducts = () => {
      if (categoryItems.length === 0) {
        // If no categories selected, display all products
        setProducts(getAllData);
      } else  {
        // Filter products based on selected categories
        const filteredProducts = getAllData.filter((product) =>
        categoryItems.includes(product.category)
        );
        setProducts(filteredProducts);
      } 
    };
    filterProducts();
  }, [categoryItems]);

  return (
    <div className="categoryContainer">
      <h1>{"Category"}</h1>
      <div className="categoryItem">
        <input
          type="checkbox"
          value={"men's clothing"}
          onChange={handleCheckboxChange}
          checked={categoryItems.includes("men's clothing")}
        />
        <span>{"Men's clothing"}</span> <br />
        <input
          type="checkbox"
          value={"women's clothing"}
          onChange={handleCheckboxChange}
          checked={categoryItems.includes("women's clothing")}
        />
        <span>{"women's clothing"}</span>
      </div>
    </div>
  );
};
export default Categories;
