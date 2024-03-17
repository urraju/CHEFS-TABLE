const Banner = () => {
  return (
    <div>
      <div className="background  max-w-screen-xl mx-auto my-10 flex justify-center items-center">
        <div className="text-center">
          <h1 className="md:text-4xl text-3xl text-white tracking-wider font-bold py-2 md:leading-relaxed">Discover an exceptional cooking <br /> class tailored for you!</h1>
          <p className="text-white font-light">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
          <div className="flex gap-6 justify-center items-center py-8">
            <button className="bg-green-500 hover:bg-gray-200 duration-200 px-5 py-2 rounded-full font-semibold">Explore Now</button>

            <button className="border text-white hover:border-green-500 hover:bg-green-500 duration-200 px-4 py-2 tracking-wider rounded-full ">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
