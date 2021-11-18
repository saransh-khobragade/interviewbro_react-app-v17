import { Link,Outlet } from "react-router-dom";
function Home() {
  return (
    <div className="App">
      Home
      <br/>
      <Link to="/first"> First </Link>
      <Link to="/second"> Second </Link>
      <Link to="/third"> Third </Link>
      <div style={{border:"1px black solid"}}><Outlet/></div>
      
    </div>
  );
}

export default Home;
