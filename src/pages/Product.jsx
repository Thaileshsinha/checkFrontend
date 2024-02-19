import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Button, Grid, Typography } from "@mui/material";
import img1 from "../assests/img2.jpg";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const { productId } = useParams();
    const [prodetils, setProdetils] = useState(null);
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    const handleHome = () => {
        navigate("/thankyou")
    }

    useEffect(() => {
        getProduct();
    }, [token]);

    const getProduct = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axios.post(
                "https://checkbackend-zaxv.onrender.com/user/getoneproduct",
                { productId },
                config
            );
            setProdetils(response.data.getpro);
            console.log(response.data.getpro.price);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Box m="20px">
                {prodetils ? (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            justifyItems: "center",
                            flexWrap: "wrap"
                        }}
                    >
                        <Box
                            sx={{
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                                borderRadius: "10px",
                                width: "300px",
                                mr: { md: "200px", sm: "0px" },
                                mb: { md: "0px", sm: "20px" },
                            }}
                        >
                            <img src={img1} alt="image" width="100%" />
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                justifyItems: "center",
                                flexDirection: "column",
                                width: "350px",
                            }}
                        >
                            <Typography my="5px">{prodetils.title}</Typography>
                            <Typography my="5px">{prodetils.description}</Typography>
                            <Typography my="5px">price : {prodetils.price}/- Rs</Typography>
                            <Button my="5px" variant="outlined" onClick={handleHome} >Check Out</Button>
                        </Box>
                    </Box>
                ) : (
                    <Typography>Loading ....</Typography>
                )}
            </Box>
        </>
    );
};

export default Product;
