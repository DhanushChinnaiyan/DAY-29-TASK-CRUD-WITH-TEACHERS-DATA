import React , {useState} from 'react';
import { Button,TextField } from "@mui/material";
import { useHistory } from 'react-router-dom';
import Base from '../BASE/base';


const AddTeachers = ({teachersData,setTeachersData}) => {

    const history =useHistory();

    const[values,setValues] = useState({
        id:"",
        name:"",
        batch:"",
        gender:"",
        experience:""
    })

    const{
        id,
        name,
        batch,
        gender,
        experience} = values;
    

   const handlechange = (name) => (event) => {
            const value = event.target.value;
            setValues({...values,[name]:value})
        }

    const addNewStudent = () => {

        const newStudent = {
            id,
            name,
            batch,
            gender,
            experience
        }

        setTeachersData([...teachersData,newStudent])

        setValues({
            ...values,
            id:"",
            name:"",
            batch:"",
            gender:"",
            experience:""
        })

        history.push("/teachers-list")
        console.log(newStudent)
    }
     

    return(
        <Base
        title="Add Teacher"
        >
         <div className='inputfield'>

           <TextField 
           fullWidth label="Enter ID"
           onChange={handlechange("id")}
           value={id}
           name="id"
           id="fullWidth"
           />

          <TextField 
           fullWidth label="Enter Name"
           onChange={handlechange("name")}
           value={name}
           name="name"
           id="fullWidth"
           />

           
          <TextField 
           fullWidth label="Enter Batches"
           onChange={handlechange("batch")}
           value={batch}
           name="batch"
           id="fullWidth"
           />
           <TextField 
           fullWidth label="Enter Gender"
           onChange={handlechange("gender")}
           value={gender}
           name="gender"
           id="fullWidth"
           />
           <TextField 
           fullWidth label="Enter experience"
           onChange={handlechange("experience")}
           value={experience}
           name="experience"
           id="fullWidth"
           />

           <Button
           
           className='addbtn'
           color='success'
           variant="contained"
           onClick={addNewStudent}
        
           >

            Add Teacher
           </Button>



         </div>
        </Base>
    )
}

export default AddTeachers;