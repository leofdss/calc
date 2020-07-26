import React from "react";
import "./special-keyboard.scss";
import { Container, Row, Col } from "react-grid-system";

const keys = (
  <div className="special-keys">
    <Container>
      <Col>
        <Row>
          <button className="special-key-char">(</button>
          <button className="special-key-char">)</button>
          <button className="special-key-char">Ѵ</button>
          <button className="special-key-char">^</button>
          <button className="special-key-text">sin</button>
          <button className="special-key-text">cos</button>
          <button className="special-key-text">tan</button>
        </Row>
        <Row>
          <button className="special-key-text">log</button>
          <button className="special-key-text">logₓ</button>
          <button className="special-key-char">ˣѵ</button>
          <button className="special-key-text">hip</button>
          <button className="special-key-text">sinˉ¹</button>
          <button className="special-key-text">cosˉ¹</button>
          <button className="special-key-text">tanˉ¹</button>
        </Row>
        <Row>
          <button className="special-key-text">ln</button>
          <button className="special-key-char">л</button>
          <button className="special-key-char">e</button>
          <button className="special-key-char">eˣ</button>
          <button className="special-key-char">%</button>
          <button className="special-key-char">x!</button>
          <button className="special-key-char">xˉ¹</button>
        </Row>
      </Col>
    </Container>
  </div>
);

function SpecialKeyboard() {
  return <div className="special-keyboard">{keys}</div>;
}

export default SpecialKeyboard;
