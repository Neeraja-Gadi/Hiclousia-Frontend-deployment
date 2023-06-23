import React, { useState,useEffect } from "react"
import { FiEdit2 } from 'react-icons/fi'
import ProfileForm from "../Forms/ProfileForm"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import JobDescription from "./JobDescription"
import {useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"

    const main = {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',

    }

    const  profile = {

        width: '90%',
        height: '40vh',
        gridColumn: '1/2',
        borderRadius: '0.5rem',
        border: '0.3px solid lightgrey',
        marginTop: '45px',
        marginLeft: '160px',
        backgroundColor: 'rgb(239, 245, 250)'
        // background-color: rgb(239, 245, 250)
    }

    const icon = {
        float: 'right',
        margin: '5px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer'
    }

    const cardStyle = {
        width: '90%',
        marginLeft: '30px',
        marginBottom: '15px',
      };

    const typo = {
        margin: '10px',
        color: '#0077B5'
    }

    const user = JSON.parse(localStorage.getItem('userDetails'));

const Employer = () => {
    const navigate = useNavigate();
     const {id,uId} =useParams()
   

    const [form, setForm] = useState(false)
    // const [jobPost] = useState(false)
    const [jobDescription , setJobDescription] = useState(false)

        const [getJobdetails, setGetJobdetails] = useState([]);

        useEffect(() => {
            const fetchData = () => {
              fetch(`http://localhost:8000/PlanWithDetails/${user._id}/${id}`)
                .then(response => response.json())
                .then(data => {
                    setGetJobdetails(data.data[0].jobPosts);
                    console.log(data.data[0].jobPosts);
                })
                .catch(err => console.log(err));
            };
        
            fetchData();
        
          }, []);
          console.log(getJobdetails);


    return (
        <div style={main}>
            <div style={profile}>

                <button style={icon} onClick={() => setForm(true)}><FiEdit2 style={{ fontSize: '18px', }} /></button>
                {form && <ProfileForm recPro={form => setForm(false)} />}
                
            </div>

            <div>
        <Box style={typo}>
          <Typography variant="h5" component="h2">
            Job Posted
          </Typography>
        </Box>

        {getJobdetails?.map(job => (
          <Card sx={{ minWidth: 275, marginTop: '25px' }} style={cardStyle} key={job._id}>
            <CardContent>
              <Typography variant="h5" component="div">
                {job.jobRole[0]}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {job.company}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
              <Typography variant="body2">
                {job.primarySkills.join(", ")}
                <br />
              </Typography>
              <Typography variant="body2">
                {job.location}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => setJobDescription(true)}>
                Show More
              </Button>
              <Button size="small"  onClick={()=>{navigate(`/TalentPoolNew/${job._id}`)}}>Select</Button>
              <Button size="small">Active</Button>
              {jobDescription && <JobDescription />}
            </CardActions>
          </Card>
        ))}
      </div>
        </div> 
    )
}

export default Employer