import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Grid, Typography } from '@mui/material';
import img1 from "../assests/img2.jpg";
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    const [proList, setProList] = useState([]);

    useEffect(() => {
        getProduct();
    }, [token]);

    const getProduct = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`, // Correct format for authorization header
                },
            };

            const response = await axios.post('http://localhost:5000/user/getproduct', {}, config);
            console.log('product', response.data); // Access response.data to get the actual data
            setProList(response.data.getall); // Update state with the received data
        } catch (error) {
            console.log(error);
        }
    };
    const handleNavigate = (productId) => {
        navigate(`product/${productId}`)
    }
    return (
        <>
            <Box m="20px">
                <Grid container spacing={2}>
                    {proList.length > 0 ? (
                        proList.map((e) => (
                            <Grid item key={e.productId} xs={12} sm={6} md={4} lg={4}  >
                                <Box sx={{ borderRadius: "10px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }} >
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <img src={img1} alt='img' style={{ maxWidth: "100%", height: "auto" }} />
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: '10px' }} >
                                        <Typography>{e.price}</Typography>
                                        <Button variant='outlined' onClick={() => handleNavigate(e.productId)}>go to page</Button>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    ) : (
                        <h1>Loading</h1>
                    )}
                </Grid>
            </Box>
        </>
    );
};

export default Card;
