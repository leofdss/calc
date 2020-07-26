import React from "react";
import "./toolbar.scss";

function Toolbar({ oldResult }: { oldResult: number }) {
  return (
    <div className="toolbar">
      <div className="container-toolbar">
        <button className="button-material">GRAU</button>
        <div className="spacer"></div>
        <div>{oldResult ? "Ultimo resultado: " + oldResult : ""}</div>
      </div>
    </div>
  );
}

export default Toolbar;
