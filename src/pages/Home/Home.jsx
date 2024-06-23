import React,{useState} from 'react';
import './Home.css';
import SideBar from '../../Components/sidebar/Sidebar';
import Feed from '../../Components/feed/Feed';
const Home = ({ sidebar }) => {
    const [category,setCategory]=useState(0);
  return (
    <>
      <SideBar sidebar={sidebar} categorys={category} setCategory={setCategory}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed category={category}/>
      </div>
    </>
  );
}

export default Home;
