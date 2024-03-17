import { useEffect } from "react";

const Cook = ({ cook, index,  }) => {
 

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
         
          <tbody>
            {/* row */}
            <tr>
              <td>{index + 1}</td>
              <td>{cook.name}</td>
              <td>{cook.time}</td>
              <td>{cook.calories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cook;
