

import { useState } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import AddStudents from './COMPONENTS/addstudent';
import AddTeachers from './COMPONENTS/addteachers';
import Dashboard from './COMPONENTS/dashboard';
import { EditStudents } from './COMPONENTS/editstudent';
import { EditTeacher } from './COMPONENTS/editteacher';
import { StudentsDetails } from './COMPONENTS/studentdetail';
import { StudentProfile } from './COMPONENTS/studentprofile';
import { TeacherDetails } from './COMPONENTS/teacherdetails';
import { TeacherProfile } from './COMPONENTS/teacherprofile';
import data from './DATA/data';
import teacherdata from './DATA/teacherdata';

function App() {
  const[teachersData,setTeachersData]=useState(teacherdata)
  const[studentsData,setStudentsData]=useState(data)
  return (
    <div className="App">
      <Switch>
           <Route path="/dashboard">
              <Dashboard/>
           </Route>
           <Route exact path="/">
            <Redirect to = "/dashboard"/>
           </Route>
           <Route path="/add-student-data">
              <AddStudents
              studentsData={studentsData}
              setStudentsData={setStudentsData}
              
              />
           </Route>
           <Route path="/add-teacher-data">
              <AddTeachers
              teachersData={teachersData}
              setTeachersData={setTeachersData}
              
              />
           </Route>
          <Route path="/students-list">
              <StudentsDetails
              studentsData={studentsData}
              setStudentsData={setStudentsData}
              />
          </Route>
          
          <Route path="/teachers-list">
              <TeacherDetails
              teachersData={teachersData}
              setTeachersData={setTeachersData}
              />
          </Route>
          

          <Route path="/student/:id">
            <StudentProfile
            studentsData={studentsData}
            />
          </Route>

          <Route path="/teacher/:id">
            <TeacherProfile
            teachersData={teachersData}
            />
          </Route>

          <Route path="/editstudent/:id">
            <EditStudents
            studentsData={studentsData}
            setStudentsData={setStudentsData}
            />
          </Route>

          <Route path="/editteacher/:id">
            <EditTeacher
            teachersData={teachersData}
            setTeachersData={setTeachersData}
            />
          </Route>
      </Switch>
    </div>
  );
}

export default App;


