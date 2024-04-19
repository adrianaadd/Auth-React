import React, { useState } from 'react'
import { singUp } from '../services/auth';





function Form() {
    const [name, setname] = useState("Alma")
    const [password, setpassword] = useState("1234");
    const [email, setemail] = useState();
    

    const handleName = (evento) => {
        setname(evento)
        console.log(name, password,email)
      
    }
      const handlePassword = (evento) => {
        setpassword(evento);
       
      };

    const handleEmail = (evento) => { 
        setemail(evento);
    }

    const sendForm = async (evento) => { 
        evento.preventDefault();
        const dataForm = { firstName: name, password: password, email: email }
        const response = await singUp(dataForm)
        console.log(response)
       localStorage.setItem("role", response.role)
        localStorage.setItem("token", response.token);
        localStorage.setItem("userEmail", response.user);
    }

    const logOut = () => { 
localStorage.token = null;
localStorage.role= null;
localStorage.setItem("userEmail",);
    }

  return (
    <div>
          <form onSubmit={(e)=> sendForm(e)}>
         
              <input  value={name} type="text" onChange={(e) => handleName(e.target.value)} />
          
              <input value={password} type="password" onChange={(e) => handlePassword(e.target.value)} />
          
              <input type="email" onChange={(e) => handleEmail(e.target.value)} />
              
              <button>SingUp</button>
          </form>
          <button onClick={logOut}>LogOut</button>
    </div>
  );
}

export default Form
