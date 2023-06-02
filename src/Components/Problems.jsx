import React, {useState} from "react"
import problemList1 from "./Problemset";
import problemList2 from "./Problemset";







function Problems() {
  const [displayedProblems, setDisplayedProblems] = useState(problemList1);


  const handleB1 = () => {
    setDisplayedProblems(problemList1);
  }
  const handleB2 = () => {
    setDisplayedProblems(problemList2);
  }
  
  return (
    <>
    <div className="text-center">
      <button className="p-2" onClick={handleB1}>1</button>
      <button className="p-2" onClick={handleB2}>2</button>
    </div>
    
      <table className="border-4 border-collapse w-full mt-12">
        <thead>

        
        <tr className="p-3 ">
          <th className="p-3 border-4">Title</th>
          <th className="p-3 border-4">Difficulty</th>
          <th className="p-3 border-4">Accpetance</th>
        </tr>
        </thead>
        <tbody>
        {displayedProblems.map((problem, index) => (
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
