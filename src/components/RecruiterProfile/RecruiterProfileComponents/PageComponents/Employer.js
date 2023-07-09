// import * as React from 'react';
// import { useState, useEffect } from 'react'
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import WorkIcon from '@mui/icons-material/Work';
// import { useNavigate } from "react-router-dom"
// import { useParams } from "react-router-dom"




// const user = JSON.parse(localStorage.getItem('userDetails'));



// const profile = {

//     marginTop: '130px',
//     borderRadius: '0.8rem',
//     boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
//     alignItems: 'center'

// }

// function Copyright() {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Hiclousia
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const cards = [1, 2, 3];

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Album() {

//     const navigate = useNavigate();
//     const { id} = useParams()
//     // const [form, setForm] = useState(false)
//     // const [jobPost] = useState(false)
//     // eslint-disable-next-line no-unused-vars
//     const [jobDescription, setJobDescription] = useState(false)
//     const [getJobdetails, setGetJobdetails] = useState([]);
//     useEffect(() => {
//         const fetchData = () => {
//             fetch(`http://localhost:8000/PlanWithDetails/${user._id}/${id}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     setGetJobdetails(data.data[0].jobPosts);
//                     console.log(data.data[0].jobPosts);
//                 })
//                 .catch(err => console.log(err));
//         };
//         fetchData();
//     }, [id]);
//     console.log(getJobdetails);

//     return (
//         <ThemeProvider theme={defaultTheme}>
//             <CssBaseline />
//             <AppBar position="relative">
//                 <Toolbar>

//                     <Typography variant="h6" color="inherit" noWrap>
//                         Hiclousia
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <main>

//                 {/* {plansDetails?.map((plan, index) => ( */}
//                 <Container sx={{ py: 8 }} maxWidth="md" style={profile}>
//                     <Typography>
//                         {/* {plan.recruiterPlan} */}
//                     </Typography>
//                 </Container>
//                 {/* ))} */}

//                 <Container sx={{ py: 8 }} maxWidth="md">
//                     {/* End hero unit */}
//                     {getJobdetails?.map(job => (
//                         <Grid container key={job._id} spacing={4}>
//                             {cards.map((card) => (
//                                 <Grid item key={card} xs={12} sm={6} md={4}>
//                                     <Card
//                                         sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                                     >
//                                         <Avatar
//                                             alt="Avatar Image"
//                                             sx={{
//                                                 width: 200,
//                                                 height: 200,
//                                                 alignSelf: 'center',
//                                             }}


//                                         > <WorkIcon
//                                                 sx={{
//                                                     fontSize: 100,
//                                                     color: 'primary',
//                                                     alignSelf: 'center',
//                                                     mt: 4,
//                                                 }}
//                                             />
//                                         </Avatar>



//                                         <CardContent sx={{ flexGrow: 2 }}>
//                                             <Typography gutterBottom variant="h5" component="h2">
//                                                 {job.jobRole[0]}
//                                             </Typography>
//                                             <br></br>

//                                             <Typography variant="h6" >
//                                                 {job.company}
//                                             </Typography>
//                                             <br></br>

//                                             <Typography variant="h7" >
//                                                 Primary Skills:  {job.primarySkills.join(", ")}
//                                             </Typography>
//                                             <br></br>

//                                             <Typography variant="h7" >
//                                                 Location: {job.location}
//                                             </Typography>
//                                             <br></br>


//                                         </CardContent>
//                                         <CardActions>
//                                             <Button size="small" variant='outlined' onClick={() => setJobDescription(true)}>Description</Button>
//                                             <Button size="small" variant='outlined' onClick={()=>{navigate(`/TalentPoolNew/${job._id}`)}}>Select</Button>
//                                         </CardActions>
//                                     </Card>
//                                 </Grid>
//                             ))}
//                         </Grid>
//                     ))}
//                 </Container>
//             </main>
//             {/* Footer */}
//             <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            
//                 <Copyright />
//             </Box>
//             {/* End footer */}
//         </ThemeProvider>
//     );
// }


// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import WorkIcon from '@mui/icons-material/Work';
// import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// const user = JSON.parse(localStorage.getItem('userDetails'));

// const profile = {
//   marginTop: '130px',
//   borderRadius: '0.8rem',
//   boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
//   alignItems: 'center'
// };

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Hiclousia
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Album() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [jobDescription, setJobDescription] = useState(false);
//   const [getJobDetails, setGetJobDetails] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/PlanWithDetails/${user._id}/${id}`);
//         const data = await response.json();
//         setGetJobDetails(data.data[0].jobPosts);
//         console.log(data.data[0].jobPosts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Toolbar>
//           <Typography variant="h6" color="inherit" noWrap>
//             Hiclousia
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <main>
//         <Container sx={{ py: 8 }} maxWidth="md" style={profile}>
//           {/* Render plan info here */}
//           {/* <Typography>{plan.recruiterPlan}</Typography> */}
//         </Container>

//         <Container sx={{ py: 8 }} maxWidth="md">
//           {/* Render job posts */}
//           <Grid container spacing={4}>
//             {getJobDetails.map((job) => (
//               <Grid item key={job._id} xs={12} sm={6} md={4}>
//                 <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//                   <Avatar
//                     alt="Avatar Image"
//                     sx={{
//                       width: 200,
//                       height: 200,
//                       alignSelf: 'center'
//                     }}
//                   >
//                     <WorkIcon
//                       sx={{
//                         fontSize: 100,
//                         color: 'primary',
//                         alignSelf: 'center',
//                         mt: 4
//                       }}
//                     />
//                   </Avatar>

//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       {job.jobRole[0]}
//                     </Typography>
//                     <Typography variant="h6">{job.company}</Typography>
//                     <Typography variant="h7">Primary Skills: {job.primarySkills.join(', ')}</Typography>
//                     <Typography variant="h7">Location: {job.location}</Typography>
//                   </CardContent>
//                   <CardActions>
//                     {jobDescription ? (
//                       <Button size="small" variant="outlined" onClick={() => setJobDescription(false)}>
//                         Hide Description
//                       </Button>
//                     ) : (
//                       <Button size="small" variant="outlined" onClick={() => setJobDescription(true)}>
//                         Description
//                       </Button>
//                     )}
//                     <Button
//                       size="small"
//                       variant="outlined"
//                       onClick={() => {
//                         navigate(`/TalentPoolNew/${job._id}`);
//                       }}
//                     >
//                       Select
//                     </Button>
//                   </CardActions>

//                   {/* Render job description here */}
//                   {jobDescription && (
//                     <CardContent>
//                       <Typography variant="body2">{job.description}</Typography>
//                     </CardContent>
//                   )}
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//       <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
       
//         <Copyright />
//       </Box>
//     </ThemeProvider>
//   );
// }    

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import WorkIcon from '@mui/icons-material/Work';
// import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import JobPost from "../../../RecruiterForms/JobPost"

// const user = JSON.parse(localStorage.getItem('userDetails'));

// const profile = {
//   marginTop: '130px',
//   borderRadius: '0.8rem',
//   boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
//   alignItems: 'center',
// };

// function JobDescription({ description, onClose }) {
//   return (
//     <CardActions>
//       <Button size="small" variant="outlined" onClick={onClose}>
//         Hide Description
//       </Button>
//       <CardContent>
//         <Typography variant="body2">{description}</Typography>
//       </CardContent>
//     </CardActions>
//   );
// }

// function JobCard({ job, onShowDescription, onSelectJob }) {
//   const [showDescription, setShowDescription] = useState(false);

//   const toggleDescription = () => {
//     setShowDescription(!showDescription);
//   };

//   return (
//     <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//       {/* <Avatar
//         alt="Avatar Image"
//         sx={{
//           width: 200,
//           height: 200,
//           alignSelf: 'center',
//         }}
//       >
//         <WorkIcon
//           sx={{
//             fontSize: 100,
//             color: 'primary',
//             alignSelf: 'center',
//             mt: 4,
//           }}
//         />
//       </Avatar> */}

//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography gutterBottom variant="h5" component="h2">
//           {job.jobRole[0]}
//         </Typography>
//         <Typography gutterBottom variant="h6">{job.company}</Typography>
//         <Typography gutterBottom variant="h7">Primary Skills: {job.primarySkills.join(', ')}</Typography>
//         <Typography gutterBottom variant="h7">Location: {job.location}</Typography>
//       </CardContent>
//       <CardActions>
//         {showDescription ? (
//           <Button size="small" variant="outlined" onClick={toggleDescription}>
//             Hide Description
//           </Button>
//         ) : (
//           <Button size="small" variant="outlined" onClick={toggleDescription}>
//             Description
//           </Button>
//         )}
//         <Button size="small" variant="outlined" onClick={() => onSelectJob(job._id)}>
//           Select
//         </Button>
//       </CardActions>

//       {showDescription && <JobDescription description={job.jobDescription} onClose={toggleDescription} />}
//     </Card>
//   );
// }

// const defaultTheme = createTheme();

// export default function Album() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [getJobDetails, setGetJobDetails] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/PlanWithDetails/${user._id}/${id}`);
//         const data = await response.json();
//         setGetJobDetails(data.data[0].jobPosts);
//         // console.log(data.data[0].jobPosts);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const handleSelectJob = (jobId) => {
//     navigate(`/TalentPoolNew/${jobId}`);
//   };

//   const handleCreateJobPost = () => {
//     // Logic to show create job post component
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Toolbar>
//           <Typography variant="h6" color="inherit" noWrap>
//             Hiclousia
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <main>

        
//         {/* <Container sx={{ py: 8 }} maxWidth="md" style={profile}> */}
//           {/* Render plan info here */}
//           {/* <Typography>{plan.recruiterPlan}</Typography> */}
//         {/* </Container> */}

//         <Container sx={{ py: 8 }} maxWidth="md">
//           {/* Render job posts */}
//           <Grid container spacing={1}>
           
//               <Grid item  xs={12} sm={6} md={4}>
//               </Grid>
          
//           </Grid>
//         </Container>

//         <Container sx={{ py: 8 }} maxWidth="md">
//           {/* Render job posts */}
//           <Grid container spacing={4}>
//             {getJobDetails.map((job) => (
//               <Grid item key={job._id} xs={12} sm={6} md={4}>
//                 <JobCard job={job} onSelectJob={handleSelectJob} />
//               </Grid>
//             ))}
//           </Grid>
//         </Container>

//         <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
//           <Button variant="contained" onClick={handleCreateJobPost}>
//             Create a New Job Post
//           </Button>
//         </Box>
//       </main>
//       <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//         <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
//           © {new Date().getFullYear()} Hiclousia
//         </Typography>
//       </Box>
//     </ThemeProvider>
//   );
// }



import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import JobPost from "../../../RecruiterForms/JobPost"

const user = JSON.parse(localStorage.getItem('userDetails'));

// const profile = {
//   marginTop: '130px',
//   borderRadius: '0.8rem',
//   boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
//   alignItems: 'center',
// };

function JobDescription({ description, onClose }) {
  return (
    <CardActions>
      <Button size="small" variant="outlined" onClick={onClose}>
        Hide Description
      </Button>
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </CardActions>
  );
}

function JobCard({ job, onShowDescription, onSelectJob }) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* <Avatar
        alt="Avatar Image"
        sx={{
          width: 200,
          height: 200,
          alignSelf: 'center',
        }}
      >
        <WorkIcon
          sx={{
            fontSize: 100,
            color: 'primary',
            alignSelf: 'center',
            mt: 4,
          }}
        />
      </Avatar> */}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {job.jobRole[0]}
        </Typography>
        <Typography gutterBottom variant="h6">{job.company}</Typography>
        <Typography gutterBottom variant="h7">Primary Skills: {job.primarySkills.join(', ')}</Typography>
        <Typography gutterBottom variant="h7">Location: {job.location}</Typography>
      </CardContent>
      <CardActions>
        {showDescription ? (
          <Button size="small" variant="outlined" onClick={toggleDescription}>
            Hide Description
          </Button>
        ) : (
          <Button size="small" variant="outlined" onClick={toggleDescription}>
            Description
          </Button>
        )}
        <Button size="small" variant="outlined" onClick={() => onSelectJob(job._id)}>
          Select
        </Button>
      </CardActions>

      {showDescription && <JobDescription description={job.jobDescription} onClose={toggleDescription} />}
    </Card>
  );
}

const defaultTheme = createTheme();

export default function Album() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [getJobDetails, setGetJobDetails] = useState([]);
  const [getPlanDetails, setGetPlanDetails] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/PlanWithDetails/${user._id}/${id}`);
        const data = await response.json();
        setGetJobDetails(data.data[0].jobPosts);
        setGetPlanDetails(data.data[0])
        console.log(data.data, "plan");
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleSelectJob = (jobId) => {
    navigate(`/TalentPoolNew/${jobId}`);
  };

  const handleCreateJobPost = () => {
    // Logic to show create job post component
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Hiclousia
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {getPlanDetails?.map((plan, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CardContent>
                    <Typography variant="h6" align="center">{plan.recruiterPlan}</Typography>
                    <Typography variant="subtitle1" align="center">Job Posts: {plan.jobPostno}</Typography>
                    <Typography variant="subtitle1" align="center">Duration: {plan.duration}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* Render job posts */}
          <Grid container spacing={4}>
            {getJobDetails.map((job) => (
              <Grid item key={job._id} xs={12} sm={6} md={4}>
                <JobCard job={job} onSelectJob={handleSelectJob} />
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
          <Button variant="contained" onClick={handleCreateJobPost}>
            Create a New Job Post
          </Button>
        </Box>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          © {new Date().getFullYear()} Hiclousia
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
