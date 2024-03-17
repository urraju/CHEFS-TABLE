import { useEffect, useState } from "react";
import RecipesCard from "./RecipesCard";
import toast from "react-hot-toast";
 

const Recipies = () => {
  const [recipe, setRecipe] = useState([]);
  const [cook, setCook] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  const handler = (selectedRecipe) => {
    
    if (!cook.find((cookedRecipe) => cookedRecipe.id === selectedRecipe.id)) {
      setCook([...cook, selectedRecipe]);
    } else {
      
       toast.error("Recipe already added to cook list")
    }
  };

  return (
    <div className="my-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold py-2">Our Recipes</h1>
        <p className="font-light py-2">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-5 justify-center mt-16">
        <div className="col-span-7  grid grid-cols-1 md:grid-cols-2 gap-4">
          {recipe.map((item) => (
            <RecipesCard key={item.id} data={item} handler={handler} />
          ))}
        </div>

        <div className="md:col-span-5 col-span-7 border rounded-2xl p-1">
            <h1 className="text-xl   text-center py-4 font-semibold border-b">Want To Cook : {cook.length}</h1>
          <div className="overflow-x-auto py-4">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th>Preparing</th>
                </tr>
              </thead>

              <tbody>
                {cook.map((item,index) => (
                  
                    <tr>
                      <td className="text-sm text-gray-500">{index + 1}</td>
                      <td className="text-sm text-gray-500">{item.name}</td>
                      <td className="text-sm text-gray-500">{item.time} time</td>
                      <td className="text-sm text-gray-500">{item.calories} calories</td>
                      <td><button className="text-[10px] bg-green-500 text-white px-2 py-1 rounded-full">Preparing</button></td>
                    </tr>

                  
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipies;
