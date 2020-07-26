import React, { useState } from "react";
import "./App.scss";
import Display from "./display/display";
import Toolbar from "./toolbar/toolbar";
import Keyboard from "./keyboard/keyboard";
import SpecialKeyboard from "./special-keyboard/special-keyboard";

const charExp = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹", "ˉ"];

function App() {
  const [clear, setClear] = useState(false);
  const [operation, setOperation] = useState([] as (string | number)[]);
  const [result, setResult] = useState(0);
  const [exp, setExp] = useState("");
  const [oldResult, setOldResult] = useState(0);
  const [historic, setHistoric] = useState(
    [] as { operation: (string | number)[]; result: number }[]
  );

  const click = (char: string | number) => {
    if (clear) {
      setClear(false);
      setOperation([char]);
    } else {
      const temp = [...operation];
      if (
        typeof char === "number" &&
        typeof temp[temp.length - 1] === "number"
      ) {
        temp[temp.length - 1] = Number(
          String(temp[temp.length - 1]) + String(char)
        );
      } else if (typeof char === "number" && temp[temp.length - 1] === ".") {
        if (typeof temp[temp.length - 2] === "number") {
          temp[temp.length - 2] = Number(
            String(temp[temp.length - 2]) + "." + String(char)
          );
          temp.pop();
        } else {
          temp[temp.length - 1] = Number("0." + String(char));
        }
      } else {
        temp.push(char);
      }
      setOperation(temp);
    }
  };

  const del = () => {
    setClear(false);
    if (operation.length > 0) {
      const temp = [...operation];

      if (typeof temp[temp.length - 1] === "number") {
        let string = String(temp[temp.length - 1]);
        let split = string.split("");
        if (split.length === 1) {
          temp.pop();
        } else {
          split.pop();
          temp[temp.length - 1] = Number(split.join(""));
          if (split[split.length - 1] === ".") {
            temp.push(".");
          }
        }
      } else {
        temp.pop();
      }
      setOperation(temp);
    }
  };

  const ac = () => {
    setClear(false);
    setOperation([]);
    setResult(0);
  };

  const processing = (operation: (string | number)[]) => {
    // tratamento dos dados
    for (let i = 0; i < operation.length; i++) {
      if (operation[i] === "Ans") {
        operation[i] =
          historic.length > 0 ? historic[historic.length - 1].result : 0;
      }
    }

    while (true) {
      const temp = operation.join("");
      if (
        !temp.includes("++") &&
        !temp.includes("--") &&
        !temp.includes("+-") &&
        !temp.includes("-+")
      ) {
        break;
      }

      for (let i = 0; i < operation.length; i++) {
        if (operation[i] === "+" && operation[i + 1] === "+") {
          operation.splice(i, 2, "+");
        } else if (operation[i] === "-" && operation[i + 1] === "-") {
          operation.splice(i, 2, "+");
        } else if (operation[i] === "+" && operation[i + 1] === "-") {
          operation.splice(i, 2, "-");
        } else if (operation[i] === "-" && operation[i + 1] === "+") {
          operation.splice(i, 2, "-");
        }
      }
    }

    if (operation[0] === "+" || operation[0] === "-") {
      operation = [0, ...operation];
    }

    if (operation.length % 2 === 0) return NaN;

    // operações matemáticas

    while (true) {
      const id = operation.findIndex((a) => a === "÷");
      if (id === -1) {
        break;
      } else {
        const divider = Number(operation[id + 1]);
        const dividend = Number(operation[id - 1]);
        const value = divider !== 0 ? dividend / divider : NaN;
        operation.splice(id - 1, 3, value);
      }
    }

    while (true) {
      const id = operation.findIndex((a) => a === "x");
      if (id === -1) {
        break;
      } else {
        const value = Number(operation[id - 1]) * Number(operation[id + 1]);
        operation.splice(id - 1, 3, value);
      }
    }

    while (true) {
      const id = operation.findIndex((a) => a === "-");
      if (id === -1) {
        break;
      } else {
        const value = Number(operation[id - 1]) - Number(operation[id + 1]);
        operation.splice(id - 1, 3, value);
      }
    }

    while (true) {
      const id = operation.findIndex((a) => a === "+");
      if (id === -1) {
        break;
      } else {
        const value = Number(operation[id - 1]) + Number(operation[id + 1]);
        operation.splice(id - 1, 3, value);
      }
    }

    return Number(operation[0]);
  };

  const calc = () => {
    setClear(true);
    const result = processing([...operation]);
    if (historic.length > 0) setOldResult(historic[historic.length - 1].result);

    setHistoric([...historic, { operation, result }]);
    setResult(result);
  };

  return (
    <div className="App">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <a href="#">Histórico</a>
            </li>
            <li>
              <a href="#">Escolher tema</a>
            </li>
            <li>
              <a href="#">Enviar feedback</a>
            </li>
            <li>
              <a href="#">Ajuda</a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Toolbar oldResult={oldResult}></Toolbar>
        <Display result={result} operation={operation} exp={exp}></Display>
        <SpecialKeyboard></SpecialKeyboard>
        <Keyboard click={click} calc={calc} del={del} ac={ac}></Keyboard>
      </div>
    </div>
  );
}

export default App;
