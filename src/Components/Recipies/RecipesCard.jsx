import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const RecipesCard = ({ data, handler }) => {
 
  const {  name, image, description, Ingredients, time, calories } = data;
  return (
    <div>
      <div className="border p-4 rounded-2xl">
        <img className="mx-auto w-full " src={image} alt="" />
        <div className="border-b py-4">
          <h1 className="text-lg font-semibold py-3">{name}</h1>
          <p className="text-[#878787] text-[16px]">{description}</p>
        </div>
        <div className="border-b py-3">
          <h1 className="font-semibold py-2 text-lg">Ingredients : 6</h1>
          {Ingredients.map((item,index) => (
            <div key={index}>
              <li className="text-[#878787] text-[16px] mb-1">{item}</li>
            </div>
          ))}
        </div>
        <div className="py-3 flex items-center gap-8">
          <div className="flex gap-2 text-sm items-center font-medium">
            <CiClock2 className="text-lg text-gray-500 font-medium" />
            <p className="text-gray-500">{time} minutes</p>
          </div>
          <div className="flex gap-2 text-sm items-center font-medium">
            <AiOutlineFire className="text-lg text-gray-500 font-medium" />
            <p className="text-gray-500">{calories} calories</p>
          </div>
        </div>
        <button onClick={() => handler(data)} className="bg-green-500 text-sm px-4 py-2 rounded-full text-white font-medium mt-2">
          Want to Cook
        </button>
      </div>
    </div>
  );
};
export default RecipesCard;
