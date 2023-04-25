import React from 'react'
import "./Navbar.css"
import { AppBar, Container, MenuItem, Select, Toolbar, Typography, makeStyles } from '@material-ui/core';
import icon from "../Images/logo.png"
import { useNavigate } from 'react-router';
import { State } from './Context';

const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: "black",
        fontFamily: "Raleway",
        fontWeight: "bold",
        fontSize: 23,
        cursor: "pointer",
        marginRight: 670
    },
}));


const Navbar = () => {

    const classes = useStyles();

    const { currency, setCurrency } = State();


    const navigate = useNavigate();

    

    return (
        <div className='nav'>


         
                <AppBar color='white'>
                    <Container>
                        <Toolbar>
                            <img src={icon} alt={icon} style={{ height: 60, width: 50 }} />
                            <Typography className={classes.title} onClick={() => navigate("/")}>CRYPTO VERSE*</Typography>
                        
                            <Typography onClick={() => navigate("/homepage")} style={{marginRight: 20, fontFamily: "Raleway", fontSize: 20, cursor: "pointer", fontWeight: "bolder"}}>HOME</Typography>
    
                            <Select
                                variant="outlined"
                                style={{ width: 100, height: 40, marginLeft: 15, backgroundColor: "white"}}
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                            >
                                <MenuItem value={"USD"} style={{ color: "black", fontWeight: 800}}>USD</MenuItem>
                                <MenuItem value={"INR"} style={{ color: "black", fontWeight: 800}}>INR</MenuItem>
                            </Select>
                        </Toolbar>
                    </Container>
                </AppBar>
           
        </div>
    )
}

export default Navbar;
