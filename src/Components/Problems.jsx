import React from "react"
import problemList from "./Problemset";

function Problems() {


  return (
    <>
      <table className="border-4 border-collapse w-11/12 mt-5">
        <thead>

        
        <tr className="p-3 ">
          <th className="p-3 border-4">Title</th>
          <th className="p-3 border-4">Difficulty</th>
          <th className="p-3 border-4">Accpetance</th>
        </tr>
        </thead>
        <tbody>
        {problemList.map((problem, index) => (
            <tr key = {index} className="p-3 ">
            <td className="p-3 border-4">{problem.title}</td>
            <td className="p-3 border-4">{problem.difficulty}</td>
            <td className="p-3 border-4">{problem.acceptance}</td>
          </tr>
        )) }
        
        
        </tbody>
      </table>
        
    </>
  )
}

export default Problems;
