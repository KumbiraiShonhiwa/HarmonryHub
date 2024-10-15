"use client"; // This tells Next.js this is a client-side component
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AddProductPage = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onAddProduct(newProduct);
    setNewProduct({ name: "", description: "", price: "", imageUrl: "" });
  };

  const handleBackButtonClick = () => {
    // Logic to navigate back
    console.log("Back button clicked");
  };

  return (
    <Container>
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          color: "#5A6A85",
          marginBottom: 2,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Add New Product
      </Typography>
      <Box
        sx={{
          backgroundColor: "#e9d9c8",
          borderRadius: "10px", // Rounded corners for the container
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // Soft shadow for elevation effect
          padding: 2, // Adds padding inside the box
          marginTop: 3, // Adds margin to the top of the box
        }}
      >
        <TextField
          label="Product Name"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{
            sx: {
              color: "black", // Set input text color to black
            },
          }}
        />
        <TextField
          label="Description"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{
            sx: {
              color: "black", // Set input text color to black
            },
          }}
        />
        <TextField
          label="Price"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{
            sx: {
              color: "black", // Set input text color to black
            },
          }}
        />
        <TextField
          label="Image URL"
          name="imageUrl"
          value={newProduct.imageUrl}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{
            sx: {
              color: "black", // Set input text color to black
            },
          }}
        />
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <Button
              href="/"
              variant="contained"
              startIcon={<ArrowBackIcon />}
              color="error"
              style={{ marginRight: "8px" }} // Add some spacing between buttons
            >
              Back
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="success"
              startIcon={<CheckIcon />}
            >
              Add Product
            </Button>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddProductPage;
