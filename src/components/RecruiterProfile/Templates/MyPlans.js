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
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';



// const user = JSON.parse(localStorage.getItem('userDetails'));


// const cards = [1, 2, 3];

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function MyPlans() {
//     const [planData, setPlanData] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:8000/revenueR/${user._id}`)
//             .then(response => response.json())
//             .then(data => {
//                 setPlanData(data.data);
//                 console.log(data.data);
//                 console.log(planData);
//             })
//             .catch(err => console.log(err));
//     }, []);

//     const recruiterInfo = {...planData.recruiterInfo};
//     const plansDetails = [planData.plans];

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
//                 <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
//                     <Container maxWidth="md">
//                         {/* Display recruiterInfo */}
//                         <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
//                            {recruiterInfo.fullName} 
//                         </Typography>
//                         <Typography variant="h6" align="center" color="textSecondary" paragraph>
//                             Email: {recruiterInfo.email}
//                         </Typography>
//                         <Typography variant="h6" align="center" color="textSecondary" paragraph>
//                             Phone Number: {recruiterInfo.phoneNumber}
//                         </Typography>
//                     </Container>
//                 </Box>
               

//                 <Container sx={{ py: 8 }} maxWidth="md">
//                     <Grid container spacing={4}>
//                         {plansDetails.map((plan, index) => (
//                             <Grid item key={index} xs={12} sm={6} md={4}>
//                                 <Card
//                                     sx={{ height: '20rem', display: 'flex', flexDirection: 'column' }}
//                                 >
//                                     <CardContent sx={{ flexGrow: 1 }}>
//                                         {/* <Typography gutterBottom variant="h5" component="h2">
//                                             {plan.recruiterPlan}
//                                         </Typography> */}
//                                     </CardContent>
//                                     <Typography style={{ alignItems: 'center' }}>
//                                         {plan.duration}   {plan.remainingDays}
//                                     </Typography>
//                                     <Typography style={{ alignItems: 'center' }}>
//                                         {plan.jobPostno}
//                                     </Typography>
//                                     <CardActions>
//                                         <Button size="small">Show more</Button>
//                                         <Button size="small">Select</Button>
//                                     </CardActions>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Container>
//             </main>
//         </ThemeProvider>
//     );
// }


import * as React from 'react';
import { useState, useEffect } from 'react'
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {useNavigate} from "react-router-dom"
const user = JSON.parse(localStorage.getItem('userDetails'));
const cards = [1, 2, 3];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function MyPlans() {
    const navigate = useNavigate();
    const [planData, setPlanData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8000/revenueR/${user._id}`)
            .then(response => response.json())
            .then(data => {
                setPlanData(data.data);
                console.log(data.data);
                console.log(planData);
            })
            .catch(err => console.log(err));
    }, []);
    const recruiterInfo = {...planData.recruiterInfo};
    const plansDetails = planData.plans;
    console.log(plansDetails)
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
                <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
                    <Container maxWidth="md">
                        {/* Display recruiterInfo */}
                        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                           {recruiterInfo.fullName}
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Email: {recruiterInfo.email}
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Phone Number: {recruiterInfo.phoneNumber}
                        </Typography>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {plansDetails?.map((plan, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '20rem', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {plan.recruiterPlan}
                                        </Typography>
                                    </CardContent>
                                    <Typography style={{ alignItems: 'center' }}>
                                        {plan.duration}   {plan.remainingDays}
                                    </Typography>
                                    <Typography style={{ alignItems: 'center' }}>
                                        {plan.jobPostno}
                                    </Typography>
                                    <CardActions>
                                        <Button size="small">Show more</Button>
                                        <Button size="small" onClick={()=>{navigate(`/Employer/${user._id}/${plan.id}`)}} >Select</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}    

