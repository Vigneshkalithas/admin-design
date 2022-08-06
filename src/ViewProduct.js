import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

function ViewProduct() {
  const navigate = useNavigate();
  let [viewData, setViewData] = useState([]);
  let { productId } = useParams();

  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>;

  async function getViewData() {
    try {
      let data = await fetch(
        `https://61f1b9df072f86001749f34c.mockapi.io/product/${productId}`
      );
      let products = await data.json();
      setViewData(products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getViewData();
  }, []);

  return (
    <>
      <Card sx={{ minWidth: 400 }}>
        <CardContent>
          <Typography variant="h1" sx={{ fontSize: 35 }} gutterBottom>
            Product Details
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography variant="h3" sx={{ mb: 1.5, fontSize: 25 }}>
            {viewData.title}
          </Typography>
          <CardMedia
            component="img"
            object-fit="fit"
            image={viewData.image}
            alt={viewData.title}
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={() => navigate("/products")}>
            Back
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ViewProduct;
