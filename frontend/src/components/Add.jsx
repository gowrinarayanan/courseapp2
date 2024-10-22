import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosinterceptor';

const Add = () => {
  const [course, setCourse] = useState({
    courseID: '',
    courseName: '',
    courseCategory: '',
    courseDescription: '',
    courseImage: '',
    courseFee: ''
  });

  const location = useLocation();
  const navigate = useNavigate();

  const fetchValue = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const sendData = () => {
    if (location.state && location.state.course) {
      axiosInstance.put('http://localhost:3002/courses/edit/' + location.state.course._id, course)
        .then((res) => {
          alert('Data updated');
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axiosInstance.post('http://localhost:3002/courses/addCourse', course)
        .then((res) => {
          navigate('/home');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if(location.state!=null){
      setCourse({...course,
        courseID: location.state.course.courseID ,
        courseName: location.state.course.courseName ,
        courseCategory: location.state.course.courseCategory ,
        courseDescription: location.state.course.courseDescription ,
        courseImage: location.state.course.courseImage ,
        courseFee: location.state.course.courseFee,
      });
    }
  }, [])

  return (
    <div>
      <h2>{location.state && location.state.course ? "Edit Course" : "New Course"}</h2>
      <TextField 
        id="standard-basic" 
        label="Course ID" 
        variant="standard" 
        name="courseID" 
        value={course.courseID} 
        onChange={fetchValue} 
      />  
      <br />
      <TextField 
        id="standard-basic" 
        label="Course Name" 
        variant="standard" 
        name="courseName" 
        value={course.courseName} 
        onChange={fetchValue} 
      /> 
      <br />
      <TextField 
        id="standard-basic" 
        label="Course Category" 
        variant="standard" 
        name="courseCategory" 
        value={course.courseCategory} 
        onChange={fetchValue} 
      /> 
      <br />
      <TextField 
        id="standard-basic" 
        label="Course Description" 
        variant="standard" 
        name="courseDescription" 
        value={course.courseDescription} 
        onChange={fetchValue} 
      /> 
      <br />
      <TextField 
        id="standard-basic" 
        label="Course Image" 
        variant="standard" 
        name="courseImage" 
        value={course.courseImage} 
        onChange={fetchValue} 
      /> 
      <br />
      <TextField 
        id="standard-basic" 
        label="Course Fee" 
        variant="standard" 
        name="courseFee" 
        value={course.courseFee} 
        onChange={fetchValue} 
      /> 
      <br /> 
      <br />
      <Button 
        sx={{ backgroundColor: 'black' }} 
        variant="contained" 
        onClick={sendData}
      >
        Submit
      </Button>
    </div>
  );
};

export default Add;
