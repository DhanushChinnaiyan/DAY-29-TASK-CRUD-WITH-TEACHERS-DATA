
import { Button,Card,CardActions,CardContent,Typography } from "@mui/material";
import React from 'react';
import { useHistory } from "react-router-dom";
import Base from "../BASE/base";


export const StudentsDetails = ({studentsData,setStudentsData}) => {

    const history = useHistory();


    const deleteStudentsData = (studId)=>{
        const selectstudent = studentsData.filter((stud)=>stud.id !== studId);
        setStudentsData(selectstudent);
    }

    return(

        <Base
        title="Students Details"
        >
             <div className="carddiv">
                    {studentsData.map((stud,idx)=>{

                        return(

                            <Card  style={{backgroundColor:"rgb(246, 251, 255)" , width:"calc(250px + 8vw)" , cursor:"context-menu"}} key={idx}>
                                <CardContent>
                                    <Typography>
                                        Name:{stud.name}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={()=>history.push(`/student/${idx}`)} >
                                        VIEW STUDENT
                                    </Button>
                                    
                                    <Button onClick={()=>deleteStudentsData(stud.id)} color="error">
                                        DELETE
                                    </Button>
                                </CardActions>


                            </Card>
                        )
                    })}
                
            </div>
        
        
        </Base>
    )
}

























