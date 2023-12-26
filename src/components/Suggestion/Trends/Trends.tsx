import React,{ useEffect, useState } from 'react'
import "./Trends.scss"
import { fetchData } from '../../../utils/fetchData';
import { useNavigate } from 'react-router-dom';

interface Rating {
    rate: number;
    count: number;
  };
  
interface Product  {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  };
//   interface TrendsProps {
//     products: Product[];
//   }
const  Trends = ()=> {
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getData = async () => {
          const res = await fetchData();
          setProducts(res?.data);
        };
        getData();
      }, []);
  return (
    <div className='trendsContainer'>
        <h1>{"Latest Trends"}</h1>
        <div className='trendsImageWrapper'>
            {products && (
                products?.slice(0,5).map((item)=>(
                    <div key={item.id} className='singleProduct' onClick={()=>navigate("/search")}>
                   <img  src={item.image} alt='trendImg' onClick={()=>navigate("/search")}/>
                    <span>{item.title.slice(0,12)} </span>
                   </div>
                ))
            )}
        </div>
    </div>
  )
}

export default Trends;
