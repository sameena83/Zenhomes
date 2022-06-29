import React from 'react'
import './style.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

function Budget() {
  return (
    <div>
        <div className="heading">
            <h3>Monthly Budget Planner</h3>
        </div>
        <div className="budget-button">
            <button className="btn gray"> Budget €2000 <button style={{backgroundColor:"light-blue"}}>Edit</button> </button>
            <button className="btn green">Remaining €1350</button>
            <button className="btn blue">Spend So far €650</button>
        </div>
        <div>
        <div className="form-container mt-5" style={{marginLeft:"100px"}}>
            <h3>Expenses</h3>
    <Form>
  <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
   
    <Form.Control type="text"  name="name" placeholder="Type to search" />
    
  </Form.Group>
  
</Form>

</div>

        </div>
        <div >
<Container fluid style={{backgroundColor:"light-blue"}}>
  <Row>
    <Col>
    <div className="display">
    <div>
        <h6> Shopping </h6></div>
    <div className="form-button"> 
        <button style={{backgroundColor:"light-blue"}}>
            €220
        </button>
    </div>
    </div>
    </Col>
  </Row>
</Container>
        </div>
        <div >
<Container fluid style={{backgroundColor:"light-blue"}}>
  <Row>
    <Col>
    <div className="display">
    <div>
        <h6> Groceries </h6></div>
    <div className="form-button"> 
        <button style={{backgroundColor:"light-blue"}}>
            €100
        </button>
    </div>
    </div>
    </Col>
  </Row>
</Container>
        </div>
        <div >
<Container fluid style={{backgroundColor:"light-blue"}}>
  <Row>
    <Col>
    <div className="display">
    <div>
        <h6> Transport </h6></div>
    <div className="form-button"> 
        <button style={{backgroundColor:"light-blue"}}>
            €120
        </button>
    </div>
    </div>
    </Col>
  </Row>
</Container>
        </div>
        <div >
<Container fluid style={{backgroundColor:"light-blue"}}>
  <Row>
    <Col>
    <div className="display">
    <div>
        <h6> ChildCare</h6></div>
    <div className="form-button"> 
        <button style={{backgroundColor:"light-blue"}}>
            €130
        </button>
    </div>
    </div>
    </Col>
  </Row>
</Container>
        </div>
        <div className="form-container mt-5" style={{marginLeft:"100px"}}>
            <h3>Add New Expense</h3>
    <Form>
  <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
   
    <Form.Control type="text"  name="name" placeholder="Expense" />
    
  </Form.Group>
  <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
   
    <Form.Control type="text"  name="name" placeholder="Amount" />
    
  </Form.Group>
  
</Form>
<button className="btn blue algn">Submit</button>

</div>
    </div>
  )
}

export default Budget
