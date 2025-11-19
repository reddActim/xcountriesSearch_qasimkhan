import logo from './logo.svg';
import './App.css';
import ShowCards from './components/ShowCards';
import { useEffect, useState } from 'react';

function App() {
const [data , setData] = useState([]);
const [filterData , setFilterData] = useState([]);
const [search , setSearch] = useState("");

useEffect(()=>{
  fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries").then((fetchData) => fetchData.json())
  .then((finalData)=>{
    setData(finalData);
  setFilterData(finalData);
  }).catch((error)=>{
    console.error("Error fetching data: ", error);
  })
}, []);

useEffect(()=>{
  setFilterData(()=>{
    return data.filter((country) => country["common"].toLowerCase().includes(search.toLowerCase()))
  })
}, [search]);

  return (
    <>
    <div className='nav'>
    <input type='text' className='input' placeholder='Search for countries' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </div>
    <ShowCards data = {search === ""? data : filterData}/>
    </>
  );
}

export default App;
