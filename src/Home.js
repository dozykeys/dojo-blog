import {useState} from 'react';

const Home = () => {

    const [name,setName]=useState("Mario");
  function handleClick(e) {
   setName(e);
  }
 
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={()=>handleClick("Dozie")}>Yes</button>
    </div>
  );
};

export default Home;
