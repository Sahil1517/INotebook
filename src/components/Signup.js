import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Signup = (props) => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
      const bodyPost=JSON.stringify({name:name,email:email,password:password})
      console.log(bodyPost)
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyPost
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/");
            props.showAlert("Account created successfully", "success")
       

        }
        else{
            props.showAlert("Invalid credentials", "danger")
        }
    }
   
    
    

    // const onChange = (e)=>{
    //     setCredentials({...credentials, [e.target.name]: e.target.value})
    //     console.log(credentials)
    // }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" value={name}onChange={e=>{setName(e.target.value)}} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={email}onChange={e=>{setEmail(e.target.value)}}aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name= "name" minLength={5} required value={password}onChange={e=>{setPassword(e.target.value)}}/>
  </div>
  {/* <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="cpassword" className="form-control" id="cpassword"name="cpassword" onChange={onChange} minLength={5} required/>
  </div> */}

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default Signup
