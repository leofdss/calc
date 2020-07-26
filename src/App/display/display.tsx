import React from "react";
import "./display.scss";

function Display({
  result,
  operation,
  exp,
}: {
  result: number;
  operation: (string | number)[];
  exp: string;
}) {
  const characters = (
    <div className="characters">
      <div className="operation">{operation}</div>
      <div className="result">
        <div className="main-char">{String(result)}</div>
        <div>{exp}</div>
      </div>
    </div>
  );
  return <div className="display">{characters}</div>;
}

export default Display;
