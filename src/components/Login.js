import React,{useState} from 'react';
import login from '../login.png';
import swal from 'sweetalert'

const Login = () => {
 const [user, setUser] = useState("");
  const [password,setPassword] = useState('')
 

  const handleSubmit =(e)=>{
    e.preventDefault()    

    
    if(user == 'reactjs@gmail.com' && password == 12345){
  swal ("Succesful Login","Welcome ReactJS","success");
    }
  
    else {
      swal("Wrong credentials","Please try again",);
    }
    
  }

  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h1>Authentication Portal</h1>
        <img className="ui centered medium image" src={login} alt="logo" />
        <div className="ui mini form">
          <form className="field">
            <label>Email address</label>
            <input
              placeholder="Email"
              type="email"
              className="six wide field"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <br />
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              className="six wide field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <div
              className="ui submit button"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </div>
          </form>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Login;
