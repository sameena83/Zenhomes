import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useNavigate} from "react-router-dom"

function Login() {
    const[inpval,setInpval]=useState({
        name:"",
        email:"",
        password:""
        
    })
    const history = useNavigate();

   const[data,setData]=useState([])
    const getData=(e)=>{
        const{value,name}=e.target
        console.log(value,name)
        setInpval(()=>{
            return{...inpval, [name]:value}
        })

    }

    const addData=(e)=>{
        e.preventDefault();
        const{name,email,password}=inpval;

        if(name=== ""){
            alert("Name field is required");
        }else if(email=== ""){
            alert("Email field is required"); 
        }else if(password===""){
            alert("password field is required"); 

        }else{
            console.log("data added successfully")
            localStorage.setItem("tenants",JSON.stringify(...data,inpval));
            history("/details")
        }

    }
  return (
    <>
    <div className='container mt-3'>
        <section className="d-flex justify-content-between">
        <div className="left_data mt-8 " style={{width:"100%"}}>
            <h3 className="text-center col-lg-6">Tenant Sign In</h3>
            <Form>
  <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
   
    <Form.Control type="text"  name="name" onChange={getData} placeholder="Enter Your Name" />
    
  </Form.Group>
  <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
   
    <Form.Control type="email" name="email"  onChange={getData} placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
    
    <Form.Control type="password" name="password"  onChange={getData} placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3 col-lg-6" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary"  className="col-lg-6" onClick={addData} type="submit">
    Submit
  </Button>
</Form>
<p className='mt-3'>Start Using our App <span>Sign In</span></p>
                
         </div>
            <div className="right_data " style={{width:"100%"}}>
            <div className="sign_img ">
                <img src="https://image.shutterstock.com/image-vector/register-access-login-password-internet-600w-1836823672.jpg" style={{maxWidth:480}}alt=""/>
                </div>


            </div>
           

        </section>
    </div>

    </>
  )
}

export default Login