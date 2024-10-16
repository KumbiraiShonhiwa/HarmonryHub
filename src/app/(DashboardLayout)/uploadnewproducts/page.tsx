"use client"; // This tells Next.js this is a client-side component
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid, InputAdornment } from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const AddProductPage = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image: null, // changed from imageUrl to handle files
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const validate = () => {
    let tempErrors = { name: "", description: "", price: "", image: "" };
    let isValid = true;

    if (!newProduct.name) {
      tempErrors.name = "Product name is required";
      isValid = false;
    }
    if (!newProduct.description) {
      tempErrors.description = "Product description is required";
      isValid = false;
    }
    if (!newProduct.price || isNaN(newProduct.price)) {
      tempErrors.price = "Valid price is required";
      isValid = false;
    }
    if (!newProduct.image) {
      tempErrors.image = "Product image is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      onAddProduct(newProduct);
      setNewProduct({ name: "", description: "", price: 0, image: null });
      setErrors({ name: "", description: "", price: "", image: "" });
    }
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
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: 2,
          marginTop: 3,
        }}
      >
        <TextField
          label="Product Name"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
          InputProps={{
            sx: {
              color: "black",
            },
            startAdornment: (
              <InputAdornment position="start">
                <LocalOfferIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Description"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.description}
          helperText={errors.description}
          InputProps={{
            sx: {
              color: "black",
            },
            startAdornment: (
              <InputAdornment position="start">
                <DescriptionIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Price"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.price}
          helperText={errors.price}
          InputProps={{
            sx: {
              color: "black",
            },
            startAdornment: (
              <InputAdornment position="start">
                <PriceCheckIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          component="label"
          sx={{ marginTop: 2 }}
          fullWidth
          error={!!errors.image}
          startIcon={<ImageIcon />}
        >
          Upload Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </Button>
        {errors.image && (
          <Typography variant="caption" color="error">
            {errors.image}
          </Typography>
        )}
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Box display="flex" justifyContent="space-between">
            <Button
              href="/"
              variant="contained"
              startIcon={<ArrowBackIcon />}
              color="error"
              style={{ marginRight: "8px" }}
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
