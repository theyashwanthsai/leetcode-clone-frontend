import React from "react";
import { useParams } from "react-router-dom";
import { problemList1, problemList2 } from './Problemset';

function Problempage() {
  const { problemName } = useParams();

  // Combine the problem lists
  const allProblems = problemList1.concat(problemList2);

  // Find the problem with the matching title
  const problem = allProblems.find((problem) => problem.title.replace(/\s+/g, "-") === problemName);

  if (!problem) {
    return <div>Problem not found</div>;
  }

  return (
    <div>
      <h1>{problem.title}</h1>
      <p>Difficulty: {problem.difficulty}</p>
      <p>Acceptance: {problem.acceptance}</p>
      <p>Description: {problem.description}</p>
    </div>
  );
}

export default Problempage;
