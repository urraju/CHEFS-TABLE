import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Recipies from "../Recipies/Recipies";
import  { Toaster } from "react-hot-toast";
const Home = () => {
  return (
    <div className="px-1 lg:px-0">
      <Toaster />
      <Navbar />
      <Banner />
      <Recipies />
    </div>
  );
};
export default Home;
