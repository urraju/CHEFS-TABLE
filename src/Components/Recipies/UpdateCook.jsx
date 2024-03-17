import { useEffect } from "react";

const UpdateCook = ({ updatedCook }) => {
 

  return (
    <div>
      <div className="overflow-x-auto">
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
            {/* row */}
            <tr>
               
              <td>{updatedCook.name}</td>
              <td>{updatedCook.time}</td>
              <td>{updatedCook.calories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateCook;
