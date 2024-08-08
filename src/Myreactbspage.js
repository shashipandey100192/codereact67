import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FcCancel } from "react-icons/fc";

function Myreactbspage() {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <Button variant='success'>submit</Button>
                <h1><FcCancel></FcCancel></h1>
                </Col>
            </Row>
        </Container>
       


    </div>
  )
}

export default Myreactbspage