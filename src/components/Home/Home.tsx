import React, { useEffect, useState } from "react";
import "./Home.scss";
import Sidebar from "../Sidebar/Sidebar";
import Product from "../Products/Product";
import { CiSearch } from "react-icons/ci";
import { fetchData } from "../../utils/fetchData";
interface Rating {
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
  rating: Rating;
}

export default function Home() {
  const [products, setProducts] = useState<ProductTypes[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData();
      setProducts(res?.data);
    };
    getData();
  }, []);
  return (
    <div className="homeContainer">
      <div className="topContainer">
        <div className="searchContainer">
          <input type="text" placeholder="Search.." />
          <CiSearch className="searchIcon" />
        </div>
      </div>

      <div className="bodyContainer">
        <Sidebar products={products} setProducts={setProducts} />
        <Product products={products} />
      </div>
    </div>
  );
}
