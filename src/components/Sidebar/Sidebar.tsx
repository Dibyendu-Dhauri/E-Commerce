import React from 'react'
import "./Sidebar.scss"
import Categories from './Categories/Categories'
import Price from './Price/Price'
import Rating from './Rating/Rating'
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

interface SidebarProps {
  products: ProductTypes[],
  setProducts:  React.Dispatch<React.SetStateAction<ProductTypes[]>>;
}

const Sidebar:React.FC<SidebarProps> = ({products,setProducts}) =>{
  return (
    <div className='sidebarContainer'>
      <h1>{"Search Results"}</h1>
      <div>
        <Categories products={products} setProducts={setProducts}/>
        <Price products={products} setProducts={setProducts}/>
        <Rating products={products} setProducts={setProducts}/>
        </div>
    </div>
  )
}

export default Sidebar;
