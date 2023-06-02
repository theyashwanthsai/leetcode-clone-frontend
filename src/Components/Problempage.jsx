import React from "react";
import { useParams } from "react-router-dom";
import { problemList1, problemList2 } from './Problemset.js';

function Problempage() {
  const { problemName } = useParams();

  const allProblems = problemList1.concat(problemList2);
  const problem = allProblems.find((problem) => problem.title.replace(/\s+/g, "-") === problemName);

  if (!problem) {
    return <div>Problem not found</div>;
  }

  return (
    <div className="flex">
    <div className="w-2/4">
      <h1 className="text-3xl p-3 m-4">{problem.title}</h1>
      <h5 className="text-lg p-3 m-4 w-1/4">Description</h5>
      <p className="text-lg p-3 m-4">{problem.description}</p>
      <div className="">
      <p className="text-lg p-3 m-4">Input:</p>
      <p className="text-lg p-3 m-4">{problem.input}</p>
      <p className="text-lg p-3 m-4">Output:</p>
      <p className="text-lg p-3 m-4">{problem.output}</p>
      </div>
      </div>
    <div className="w-2/4">
        <h1 className= "text-3xl p-3 m-4">Code:</h1>
    </div>
    </div>
  );
}

export default Problempage;
