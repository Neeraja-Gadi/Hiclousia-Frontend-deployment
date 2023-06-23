import * as React from 'react'
import { useState, useEffect } from "react"
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Container from '@mui/material/Container'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { mainListItems } from './PortfolioComponents/ListPortfolio'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { FiEdit2 } from 'react-icons/fi'
import { GrAdd } from 'react-icons/gr'
import Personal from './PortfolioComponents/PersonalPortfolio'
import EducationPortfolio from './PortfolioComponents/EducationPortfolio'
import ProjectPortfolio from './PortfolioComponents/ProjectPortfolio'
import ExperiencePortfolio from './PortfolioComponents/ExperiencePortfolio'
import { useNavigate } from 'react-router-dom'
import ProfilePic from './PortfolioComponents/PortfolioPic'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import WbIncandescentSharpIcon from '@mui/icons-material/WbIncandescentSharp';
import WorkIcon from '@mui/icons-material/Work';
import EditEducation from './PortfolioComponents/EditEducation'
import PersonIcon from '@mui/icons-material/Person';
import About from './PortfolioComponents/AboutMe'
import EditExperience from './PortfolioComponents/EditExperience'
import EditProjects from './PortfolioComponents/EditProjects'



const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function DashboardPortfolio() {


    //API Start

    const Navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("userDetails"))

    if (!user) Navigate("/login")

    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {

        fetch(`http://localhost:8000/personal/${user._id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => { console.log(data); setUserInfo(data.data) })
            .catch(err => console.log(err))
        console.log(userInfo)
    },[user._id])

    // useEffect(() => {
    //     // getEducationData()
    // }, [])


    const [eduData, setEduData] = useState(
        {
            _id: '',
            educationLevel: '',
            collegeName: '',
            authority: '',
            discipline: '',
            startYear: '',
            endYear: ''
        }
    )

    const [isEditing, setIsEditing] = useState(false);
    // function getEducationData(id) {
      
    //         fetch(`http://localhost:8000/education/${id}`, {
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //             .then((result) => result.json())
    //             .then((resp) => {
    //                 console.log("resp", resp)
    //                 setEduData(resp)
    //                 setIsEditing(true);
    //                 console.log("eduData", eduData)
    //             })
    //             .catch(error => {
    //                 console.log(error)
    //             })
       
    // };

    // Function to handle changes in form values
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEduData((prevValues) => ({ ...prevValues, [name]: value }));
    };


    // Function to submit the form data and save it to the API
    const handleSubmit = async (id) => {
        await fetch(`http://localhost:8000/education/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eduData)
        });
        setIsEditing(false);
    };


    const [expData, setExpData] = useState({})

    // // function getExperienceData() {
    // //     fetch(`http://localhost:8000/experience/63f229c2fcc41f1dc0ec4082`, {
    // //         headers: {
    // //             'Accept': 'application/json',
    // //             'Content-Type': 'application/json'
    // //         }
    // //     })
    // //         .then((result) => result.json())
    // //         .then((resp) => {
    // //             console.log("resp", resp)
    // //             setExpData(resp)
    // //             console.log("expData", expData)
    // //         })
    // //         .catch(error => {
    // //             console.log(error)
    // //         })
    // // }

    // // useEffect(() => {
    // //     getExperienceData()
    // // }, [])


    // const [proData, setProData] = useState({})

    // function getProjects() {
    //     fetch(`http://localhost:8000/projects`, {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then((result) => result.json())
    //         .then((resp) => {
    //             console.log("resp", resp)
    //             setProData(resp)
    //             console.log("proData", proData)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    // useEffect(() => {
    //     getProjects()
    // }, [])


    // API End


    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [personal, setPersonal] = useState(false)
    const [education, setEducation] = useState(false)
    const [project, setProject] = useState(false)
    const [experience, setExperience] = useState(false)
    const [editEducation, setEditEducation] = useState(false)
    const [editExperience, setEditExperience] = useState(false)
    const [editProjects, setEditProjects] = useState(false)
    // const [about, setAbout] = useState(false)


    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >

                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h5"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Hiclousia
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {/* {secondaryListItems} */}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />


                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                

                        <Card style={{ width: '80%' }}>
                            <CardContent>

                                <Typography variant="h5" component="div" color="rgb(22 102 197)">
                                    Project
                                </Typography>

                                <button
                                    onClick={() => setProject(true)}
                                    style={{
                                        float: 'right',
                                        border: 'none',
                                        background: 'transparent',
                                        marginTop: '-26px',
                                        cursor: 'pointer'
                                    }}>
                                    <GrAdd style={{ fontSize: '20px' }} />
                                </button>

                                {userInfo.projects?.map((projects,i) => (
                                    <List>

                                        <ListItem alignItems="flex-start">

                                            <ListItemAvatar>
                                                <Avatar><WbIncandescentSharpIcon /></Avatar>
                                            </ListItemAvatar>

                                            <ListItemText

                                                primary={
                                                    <React.Fragment>
                                                        <Typography variant='h6' style={{ fontFamily: "'Lora', sans-serif" }}>{projects.projectTitle}</Typography>
                                                    </React.Fragment>
                                                }

                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            {projects.projectType}
                                                        </Typography>
                                                        {" — "}{projects.projectDescription}

                                                        <Typography variant="subtitle1" gutterBottom>
                                                            {projects.organizationName}
                                                        </Typography>

                                                        <Typography variant="subtitle1" gutterBottom>
                                                            {projects.Url}
                                                        </Typography>

                                                        <Typography variant="subtitle1" gutterBottom>
                                                            {"From: "}{projects.startDate} {" — "}  {projects.endDate}
                                                        </Typography>
                                                    </React.Fragment>
                                                }
                                            />
                                            <button 
                                            onClick={() => {setEditProjects(true)}}
                                            style={{
                                                float: 'right',
                                                border: 'none',
                                                background: 'transparent',
                                                cursor: 'pointer'
                                            }}><FiEdit2 style={{ float: 'right', fontSize: '20px' }} /></button>

                                            {editProjects && <EditProjects id={userInfo.projects[i]._id} projectInfoEdit={() => setEditProjects(false)} />}

                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                ))}

                                {project && <ProjectPortfolio projectInfo={() => setProject(false)} />}

                            </CardContent>

                        </Card>
                        <br />


            
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}