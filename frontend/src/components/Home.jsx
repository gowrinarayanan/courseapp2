import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/courses/')
      .then((res) => {
        setCourse(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const deleteCourse = (id) => {
    axios.delete('http://localhost:3002/courses/delete/' + id)
      .then((res) => {
        alert('Data deleted');
        // Refresh the course list after deletion
        setCourse(courses.filter((course) => course._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateCourse = (course) => {
    navigate('/add', { state: { course } });
  };

  return (
    <div><br /><br /><br />
      <Grid container spacing={2}>
        {courses.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '300px' }}>
              <CardMedia
                sx={{ height: 250 }}
                image={item.courseImage}
                title={item.courseName}
              />
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.courseName}
                </Typography>
                <Typography variant="body2">
                  <strong>Category:</strong> {item.courseCategory}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Description:</strong> {item.courseDescription}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Fee:</strong> {item.courseFee}
                </Typography>
                <Typography><br />
                  <Button sx={{ backgroundColor: 'black', color: 'white' }}>Read More</Button>
                  <br /><br />
                  <Button variant="contained" color="success" onClick={() => deleteCourse(item._id)}>Delete</Button>
                  <Button variant="contained" color="success" onClick={() => updateCourse(item)}>Update</Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
