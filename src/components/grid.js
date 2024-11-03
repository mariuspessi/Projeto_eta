import React from "react";
import axios from "axios";
import styled from "styled-components";
import {FaTrash, FaEdit} from "react-icons/fa";
import { toast } from "react-toastify";


const Table = styled.table`
  width: 1470px;
  background-color: #fff;
  padding: 5px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 2600px;
  margin: 20px auto;
  word-break: break-all;
  background-color: #2596be ;
`;

export const Tbody = styled.tbody``; 

export const Thread = styled.thead``;

export const Tr = styled.tr``;

export const Th =  styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 1px;
  @media(max-width: 1000px){
    ${(props) => props.onlyweb && "display: none"}
  }
`;

export const Td =  styled.td`
  padding-top: 5px;
  text-align: ${(props) => (props.alignCenter ? "center": "start" )};
  width: ${(props) => (props.width ? props.width: "auto" )};
  @media(max-width: 500px){
    ${(props) => props.onlyweb && "display: none"}
  }
`;

const Grid  = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" +id)
      .then(({ data }) => { 
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };
  
    
    return (
      <Table>
        <Thread>  
            <Tr>
                <Th>Data</Th>
                <Th>Hora</Th>
                <Th>ph do Rio</Th>        
                <Th>ph Filtro  </Th>     
                <Th>ph Tratada</Th>      
                <Th>ph Reservatório</Th>
                <Th>Condutividade Rio</Th>  
                <Th>Condutividade Tratada</Th>     
                <Th>Alcalinidade do Rio   </Th>    
                <Th>Alcalinidade Tratada  </Th>      
                <Th>Dureza Rio</Th>        
                <Th>Dureza Tratada</Th>
                <Td></Td>
                <Td></Td>
                
            </Tr>
        </Thread>
        <Tbody>
          {users.map((item, i) => (
            <Tr key = {i}>

                <Th width="0.005%">{item.dhata}</Th>
                <Td width="0.003%">{item.hora}</Td>
                <Td width="0.003%">{item.phRio}</Td>        
                <Td width="0.003%">{item.phFiltro}  </Td>     
                <Td width="0.004%">{item.phTratada}</Td>      
                <Td width="0.005%">{item.phReservatorio}</Td>
                <Td width="0.006%">{item.condtRio}</Td>  
                <Td width="0.0045%">{item.condtTrat}</Td>     
                <Td width="0.006%">{item.alcRio}   </Td>    
                <Td width="0.007%">{item.alcTrat}  </Td>      
                <Td width="0.004%">{item.durRio}</Td>        
                <Td width="0.005%">{item.durTrat}</Td>
           
            
            <Td alignCenter width="0.0005%">
                <FaEdit onClick={() => handleEdit(item)} /> 
            </Td>
            <Td alignCenter width="0.0005%">
                <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
          ))}
        </Tbody>
      </Table>

    );
};

export default Grid;