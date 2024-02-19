import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from "@mui/icons-material"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate()
    const [detail, setDetail] = useState({ email: "", password: "", mobile: "", name: "" })
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetail({
            ...detail,
            [name]: value
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("https://checkbackend-zaxv.onrender.com/user/createuser", { email: detail.email, mobile: detail.mobile, password: detail.password, name: detail.name }).then((res) => {
            // console.log("res", res.data.token)
            localStorage.setItem("token", res.data.token)
            setDetail({ email: "", password: "", mobile: "", name: "" });
            navigate("/login")

        }).catch((err) => {
            console.log(err)
        })
        console.log(detail)
    }
    return (
        <>
            <Typography variant='h5' m="10px" >Register page</Typography>
            {/* <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", width: "100%", height: "90%" }}> */}
            <Box sx={{ m: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: "90%" }} >
                <TextField sx={{ m: 1, width: '25ch' }} label="name" name='name' type='text' variant="outlined" value={detail.name} onChange={handleChange} />
                <TextField sx={{ m: 1, width: '25ch' }} label="email" name='email' type='email' variant="outlined" value={detail.email} onChange={handleChange} />
                <TextField sx={{ m: 1, width: '25ch' }} label="number" name='mobile' type='number' variant="outlined" value={detail.mobile} onChange={handleChange} />

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={detail.password}
                        onChange={handleChange}
                        name='password'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    // onChange={handleMouseDownPassword}
                                    edge="end"

                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <Button type='submit' variant="contained" onClick={handleSubmit} >Submit</Button>
            </Box>
            {/* </Box> */}
        </>
    )
}

export default Register