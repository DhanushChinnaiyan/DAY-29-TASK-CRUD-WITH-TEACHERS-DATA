
import { Button,Card,CardActions,CardContent,Typography } from "@mui/material";
import React from 'react';
import { useHistory } from "react-router-dom";
import Base from "../BASE/base";


export const TeacherDetails = ({teachersData,setTeachersData}) => {

    const history = useHistory();


    const deleteteachersData = (studId)=>{
        const selectstudent = teachersData.filter((stud)=>stud.id !== studId);
        setTeachersData(selectstudent);
    }

    return(

        <Base
        title="Teachers Details"
        >
             <div className="carddiv">
                    {teachersData.map((stud,idx)=>{

                        return(

                            <Card  style={{backgroundColor:"rgb(246, 251, 255)" , width:"calc(250px + 8vw)" , cursor:"context-menu"}} key={idx}>
                                <CardContent>
                                    <Typography>
                                        Name:{stud.name}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={()=>history.push(`/teacher/${idx}`)} >
                                        VIEW TEACHER
                                    </Button>
                                    
                                    <Button onClick={()=>deleteteachersData(stud.id)} color="error">
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

























