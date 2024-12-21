const Home = () => {
  function handleClick(e,b) {
    console.log(e,b.target);
  }
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={(e)=>handleClick("dozie",e)}>Yes</button>
    </div>
  );
};

export default Home;
