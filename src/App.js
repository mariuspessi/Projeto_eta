import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
//import "react-toastify/dist/React-Toastify.css";  
import Form from "./components/form.js";
import Grid from "./components/grid.js";
import axios from "axios";




const Title = styled.h2`
text-align: center;
background-color: #2596be;
padding: 20px;
`;

function App() {

  const[users, setUsers] = useState([]);
  const[onEdit, setOnEdit] = useState(null);

  const getUsers = async () =>{
    try {
      const res = await axios.get("http://localhost:8800/");
        setUsers(res.data.sort((a, b) => (a.analist > b.analist ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
   }, [setUsers]);

  return (
    <>
    
      <Title>Tratamento de Água</Title>
      <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
      <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />

    
    </>
  );
}

export default App;
