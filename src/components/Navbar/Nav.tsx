import React, {  useState} from 'react'
import { CiSearch } from "react-icons/ci";
import './Nav.scss'
import Suggestion from '../Suggestion/Suggestion';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const [searchItem,setSearchItem] = useState("");
 const navigate = useNavigate();
 const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    // Trigger navigation to "/search" when Enter key is pressed
    navigate('/search');
  }
};
  return (
    <div className='mainContainer'> 
    <div className='navContainer'>
    <div className='nav'>
        <input type='text' placeholder='Search' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} 
        onKeyDown={handleKeyDown}/>
        <CiSearch className='searchIcon'/>
    </div>
    <Suggestion searchItem = {searchItem}/>
    </div>
    </div>
  )
}
