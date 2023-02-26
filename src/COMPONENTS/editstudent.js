
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "../BASE/base";


export const EditStudents = ({studentsData,setStudentsData}) => {
  const history = useHistory();
  const {id} = useParams();
  const student = studentsData[id];
  const [name,setName] = useState("");
  const [batch,setBatch] = useState("");
  const [idx,setIdx] = useState("");
  const [gender,setGender] = useState("");
  const [experience,setExperience] = useState("");


  useEffect(()=>{
    
    setIdx(student.id);
    setName(student.name);
    setBatch(student.batch);
    setGender(student.gender);
    setExperience(student.experience)
  },[])

const updateStudent = () => {

    const editedStudent = studentsData.findIndex((stud)=> stud.id === idx )

    // console.log(editedStudent)

    const updatedObj = {
        id,
        name,
        batch,
        gender,
        experience
    }
    studentsData[editedStudent] = updatedObj;

    setStudentsData([...studentsData])
    setIdx("")
    setName("")
    setBatch("")
    setGender("")
    setExperience("")

    history.push("/students-list")
}



    return(
        <Base
        title="Edit Your Profie"
        >
         <div className="editStudent">
            <TextField
            fullWidth label="Enter Id"
            onChange={(event)=>setIdx(event.target.value)}
            value={idx}
            />

            <TextField
            fullWidth label="Enter Name"
            onChange={(event)=>setName(event.target.value)}
            value={name}
            />

            <TextField
            fullWidth label="Enter Batch"
            onChange={(event)=>setBatch(event.target.value)}
            value={batch}
            />

            <TextField
            fullWidth label="Enter Gender"
            onChange={(event)=>setGender(event.target.value)}
            value={gender}
            />

            <TextField
            fullWidth label="Enter Experience"
            onChange={(event)=>setExperience(event.target.value)}
            value={experience}
            />

            <Button 
              color="secondary"
              variant="contained"
              onClick={updateStudent}
            
            >
                Update Data
            </Button>
         </div>
        </Base>
    )
}