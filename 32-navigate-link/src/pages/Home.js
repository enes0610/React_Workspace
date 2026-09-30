import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>Click below to go to the Form page.</p>
      <Link to="/form" className="btn">Go to Form</Link>
    </div>
  );
};

export default Home;