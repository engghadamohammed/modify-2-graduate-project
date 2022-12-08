import React, { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../../Contex/Authprovider";
import axios from "axios";

// const LOGIN_URL = '/auth';
import App2 from "../../../src/App2";


function Signin ()
{
  const { setAuth } = useContext( AuthContext );
  const userRef = useRef();
  const errRef = useRef();
  
  const [mail, setMail] = useState( '' )
  const [password, setPassword] = useState( '' )
  const [phone, setPhone] = useState( '' )
  const [name, setName] = useState( '' )
  const [age, setAge] = useState( '' ) 
  const [errMes,setErrMes] = useState( '' )
  const [success, setSuccess] = useState( '' )
  useEffect( () =>
  {
    userRef.current.focus();

  }, [] )
  useEffect( () =>
  {
    setErrMes( "" );

  }, [ name,mail,password,age,phone] )
  
  const handelsubmit = async ( e ) =>
  {
    e.preventDefault();
    try
    {
      const response = await axios.post( "localhost:3000/user/signUp",
        JSON.stringify( { name, mail, password, age, phone } ),
        {
          headers: { "Content-Type": 'application/json' },
          withCredentials: true
        } );
      console.log( JSON.stringify( response?.data ) );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth( { name,mail,password,age,phone, roles, accessToken } );
      setName( "" );
      setMail( '' );
      setPassword( "" );
      setAge( '' );
      setPhone( "" );
     
    setSuccess( true );
   
   
   
    }
    catch ( error )
    {
      if ( !error?.response )
      {
        setErrMes("No service Response")
      } else if(error.response?.status===400)
      {
        setErrMes("Try Agine")
      }
      else if ( error.response?.status === 401 )
      {
        setErrMes("Unauthorized")
      } else
      {
        setErrMes("Login Failed")
      }
      errRef.current.focus();
    }
        
    

   


  }

  
  
  // const Hadellogin = (e) =>
  // {
  //   e.preventDefault();
  //   console.log( email, password, age, phone, name )
  //   axios.post( "", {
  //     email: email,
  //     password: password,
  //     phone: phone,
  //     age: age,
  //     name:name
  //   } ).then( res =>
  //   {
  //     console.log( res );
  //   } )
  //     .catch( error =>
  //     {
  //       console.log( error )
  //       alert("Login please")
  //     } )
  
  // }




  return (
    <>
      {success ? (
        <section>
            <App2/>
        </section>
      ) :
       ( <section>
          <p ref={errRef} className={errMes ? "errmsg" : "offscreen"} aria-live="assertive">{errMes}</p>
   
          {/* onSubmit={handelsubmit} */}
          <div className="container">
          <form>
          
            <div className="mb-3 ">
              <label htmlFor="exampleInputName" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                ref={userRef}
                value={name}
                required
                onChange={e => setName( e.target.value )} />
    
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control"
            
                required

                value={mail} onChange={e => setMail( e.target.value )} />
    
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" className="form-control" value={password} onChange={e => setPassword( e.target.value )} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputphone" class="form-label">Phone</label>
              <input type="phone" className="form-control" value={phone} onChange={e => setPhone( e.target.value )} />
            </div>
 
            <div className="mb-3">
              <label htmlFor="exampleInputage" class="form-label">Age</label>
              <input type="numbre" className="form-control" value={age} onChange={e => setAge( e.target.value )} />
            </div>
 
            <button type="submit" onClick={handelsubmit} className="btn btn-primary">Submit</button>
            </form>
            </div>
          {/* <p>
            Need an Account?<br />
            <span className="line">
              <Link> Sign Up</Link>
            </span>
          </p> */}
        </section>)
      }
      </>
  );
    }



export default Signin;