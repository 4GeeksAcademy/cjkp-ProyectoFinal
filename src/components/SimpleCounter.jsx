import { Row, Col } from "react-bootstrap";
import { HiLightningBolt } from "react-icons/hi";

export function SimpleCounter(props) {
  const d1 = Math.floor((props.seconds / Math.pow(10, 1 - 1)) % 10);
  const d2 = Math.floor((props.seconds / Math.pow(10, 2 - 1)) % 10);
  const d3 = Math.floor((props.seconds / Math.pow(10, 3 - 1)) % 10);
  const d4 = Math.floor((props.seconds / Math.pow(10, 4 - 1)) % 10);
  const d5 = Math.floor((props.seconds / Math.pow(10, 5 - 1)) % 10);
  const d6 = Math.floor((props.seconds / Math.pow(10, 6 - 1)) % 10);

  return (
    <Row>
      {/* <Col className="bg-dark text-white text-alien=center" ><HiLightningBolt />{d6}</Col> */}
      <Col>{d6}</Col>
      <Col>{d5}</Col>
      <Col>{d4}</Col>
      <Col>{d3}</Col>
      <Col>{d2}</Col>
      <Col>{d1}</Col>
    </Row>
  );
}


