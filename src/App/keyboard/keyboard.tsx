import React from "react";
import "./keyboard.scss";
import { Container, Row, Col } from "react-grid-system";

function Keyboard({ click, calc, del, ac }: any) {
  const keys = (
    <div className="keys">
      <Container>
        <Col>
          <Row>
            <button className="key-char" onClick={() => click(7)}>
              7
            </button>
            <button className="key-char" onClick={() => click(8)}>
              8
            </button>
            <button className="key-char" onClick={() => click(9)}>
              9
            </button>
            <button
              className="key-text"
              onClick={() => {
                del();
              }}
            >
              DEL
            </button>
            <button
              className="key-text"
              onClick={() => {
                ac();
              }}
            >
              AC
            </button>
          </Row>
          <Row>
            <button className="key-char" onClick={() => click(4)}>
              4
            </button>
            <button className="key-char" onClick={() => click(5)}>
              5
            </button>
            <button className="key-char" onClick={() => click(6)}>
              6
            </button>
            <button className="key-char" onClick={() => click("x")}>
              x
            </button>
            <button className="key-char" onClick={() => click("÷")}>
              ÷
            </button>
          </Row>
          <Row>
            <button className="key-char" onClick={() => click(1)}>
              1
            </button>
            <button className="key-char" onClick={() => click(2)}>
              2
            </button>
            <button className="key-char" onClick={() => click(3)}>
              3
            </button>
            <button className="key-char" onClick={() => click("+")}>
              +
            </button>
            <button className="key-char" onClick={() => click("-")}>
              -
            </button>
          </Row>
          <Row>
            <button className="key-char" onClick={() => click(0)}>
              0
            </button>
            <button className="key-char" onClick={() => click(".")}>
              .
            </button>
            <button className="key-text">
              EXP
            </button>
            <button className="key-text" onClick={() => click("Ans")}>
              Ans
            </button>
            <button className="key-char" onClick={() => calc()}>
              =
            </button>
          </Row>
        </Col>
      </Container>
    </div>
  );
  return <div className="keyboard">{keys}</div>;
}

export default Keyboard;
