import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const localId = localStorage.getItem("token")
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate("/register")
    }
    const handleLogin = () => {
        navigate("/login")
    }
    const handleLogout = () => {

        localStorage.clear("token")
        navigate("/login")
    }
    const handleHome = () => {
        navigate("/")
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}  >
                            <img src='https://civilguruji.com/assets/logo.svg' onClick={handleHome} />
                            <Box>
                                {
                                    localId ?
                                        <Button color="inherit" sx={{ mx: "20px" }} onClick={handleLogout} >Logout</Button> :
                                        <Button color="inherit" sx={{ mx: "20px" }} onClick={handleLogin} >Login</Button>
                                }
                                <Button color="inherit" sx={{ mx: "20px" }} onClick={handleRegister} >
                                    Register
                                </Button>

                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar