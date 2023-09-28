
import React, { useState } from 'react';

const Register = () => {
  const [formdata,setFormdata] = useState({
    username:"",
    email:"",
    password:""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic, e.g., send data to server or perform client-side validation
    console.log(formdata);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>

      <input
          type="text"
          placeholder="Username"
          value={formdata.username}
          onChange={(e) => setFormdata(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={formdata.email}
          onChange={(e) => setFormdata(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={formdata.password}
          onChange={(e) => setFormdata(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;