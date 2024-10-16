"use client";
import { useState } from "react";
import {
  TextField,
  Container,
  Button,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  LinearProgress,
  Tooltip,
  Snackbar,
  Alert,
  InputAdornment,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import ProductIcon from "@mui/icons-material/Category"; // Example icon for Product ID
import TitleIcon from "@mui/icons-material/Title"; // Example icon for Title
import DescriptionIcon from "@mui/icons-material/Description"; // Example icon for Descriptor
import LinkIcon from "@mui/icons-material/Link"; // Example icon for Product Link
import PriceIcon from "@mui/icons-material/AttachMoney"; // Example icon for Price
import BrandIcon from "@mui/icons-material/LocalOffer"; // Example icon for Brand
import ImageIcon from "@mui/icons-material/Image";

interface FormData {
  id: string;
  title: string;
  descriptor: string;
  link: string;
  image: File | null;
  availability: boolean;
  availabilityDate: string;
  price: string;
  brand: string;
}

const StockLoggingForm = () => {
  const { width, height } = useWindowSize();
  const [formData, setFormData] = useState<FormData>({
    id: "",
    title: "",
    descriptor: "",
    link: "",
    image: null,
    availability: false,
    availabilityDate: "",
    price: "",
    brand: "",
  });
  const [completedFields, setCompletedFields] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const totalFields = 8;

  const calculateProgress = (newFormData: any) => {
    const filledFields = Object.values(newFormData).filter(
      (value) => value !== ""
    ).length;
    setCompletedFields(filledFields);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    calculateProgress(newFormData);
  };

  const handleCheckboxChange = (e: any) => {
    const { name, checked } = e.target;
    const newFormData = { ...formData, [name]: checked };
    setFormData(newFormData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowSuccess(true);
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 3000);
    console.log(formData);
  };

  const handleCloseSnackbar = () => {
    setShowSuccess(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    setFormData((prev: any) => ({ ...prev, image: file }));
  };

  const getMotivationalMessage = () => {
    const percentageComplete = Math.round(
      (completedFields / totalFields) * 100
    );
    if (percentageComplete === 100) return "Awesome! You're all done!";
    if (percentageComplete >= 75) return "Almost there! Keep going!";
    if (percentageComplete >= 50) return "Halfway through, you're doing great!";
    if (percentageComplete >= 25) return "Keep it up! You're on a roll!";
    return "Let's get started!";
  };

  const handleBackButtonClick = () => {
    // Logic to navigate back
    console.log("Back button clicked");
  };

  return (
    <Container>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          color: "#5A6A85",
          marginBottom: 2,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Stock Logging Form
      </Typography>
      <Box
        sx={{
          p: 4,
          maxWidth: "800px",
          backgroundColor: "#e9d9c8",
          margin: "auto",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        {/* Title */}

        {/* Progress Bar */}
        <LinearProgress
          variant="determinate"
          value={(completedFields / totalFields) * 100}
          sx={{
            mb: 2,
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor:
                (completedFields / totalFields) * 100 === 100
                  ? "green"
                  : (completedFields / totalFields) * 100 >= 50
                  ? "orange"
                  : "red",
            },
          }}
        />
        <Typography
          variant="body2"
          color="textSecondary"
          gutterBottom
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          {Math.round((completedFields / totalFields) * 100)}% Complete
        </Typography>

        {/* Motivational Message */}
        <Typography
          variant="h6"
          color="#5A6A85"
          gutterBottom
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          {getMotivationalMessage()}{" "}
          {completedFields === totalFields ? "🎉" : ""}
        </Typography>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* ID Field */}
            <Grid item xs={12}>
              <Tooltip title="Unique identifier for the product">
                <TextField
                  fullWidth
                  label="Product ID"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ProductIcon />
                      </InputAdornment>
                    ),
                    endAdornment: formData.id && (
                      <CheckCircleOutlineIcon color="success" />
                    ),
                    sx: {
                      color: "black", // Set input text color to black
                    },
                  }}
                />
              </Tooltip>
            </Grid>

            {/* Title */}
            <Grid item xs={12}>
              <Tooltip title="Product name as it will be displayed">
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  color="secondary"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                    endAdornment: formData.title && (
                      <CheckCircleOutlineIcon color="success" />
                    ),
                    sx: {
                      color: "black", // Set input text color to black
                    },
                  }}
                />
              </Tooltip>
            </Grid>

            {/* Descriptor */}
            <Grid item xs={12}>
              <Tooltip title="Brief description of the product">
                <TextField
                  fullWidth
                  label="Descriptor"
                  name="descriptor"
                  value={formData.descriptor}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                    sx: {
                      color: "black", // Set input text color to black
                    },
                  }}
                />
              </Tooltip>
            </Grid>

            {/* Link */}
            <Grid item xs={12}>
              <Tooltip title="Link to the product page">
                <TextField
                  fullWidth
                  label="Product Link"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
                      </InputAdornment>
                    ),
                    sx: {
                      color: "black", // Set input text color to black
                    },
                  }}
                />
              </Tooltip>
            </Grid>

            {/* Image Upload */}
            <Grid item xs={12}>
              <Tooltip title="Upload the product image">
                <Button
                  variant="contained"
                  color="warning"
                  component="label"
                  fullWidth
                  startIcon={<ImageIcon />}
                >
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleFileChange}
                  />
                </Button>
              </Tooltip>
              {formData.image && (
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: 1 }}
                >
                  {formData.image.name}
                </Typography>
              )}
              {imagePreview && (
                <Box sx={{ mt: 2 }}>
                  <img
                    src={imagePreview}
                    alt="Image Preview"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: 4,
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </Box>
              )}
            </Grid>

            {/* Availability */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.availability}
                    onChange={handleCheckboxChange}
                    name="availability"
                  />
                }
                label="Is Available?"
                sx={{ color: "black" }} // Change the color to black
              />
            </Grid>

            {/* Availability Date */}
            {formData.availability && (
              <Grid item xs={12}>
                <Tooltip title="Date when the product will be available">
                  <TextField
                    fullWidth
                    label="Availability Date"
                    type="date"
                    name="availabilityDate"
                    value={formData.availabilityDate}
                    onChange={handleInputChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Tooltip>
              </Grid>
            )}

            {/* Price */}
            <Grid item xs={12}>
              <Tooltip title="Price of the product">
                <TextField
                  fullWidth
                  label="Price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PriceIcon />
                      </InputAdornment>
                    ),
                    endAdornment: formData.price && (
                      <CheckCircleOutlineIcon color="success" />
                    ),
                    sx: {
                      color: "black", // Set input text color to black
                    },
                  }}
                />
              </Tooltip>
            </Grid>

            {/* Brand */}
            <Grid item xs={12}>
              <Tooltip title="Brand name of the product">
                <TextField
                  fullWidth
                  label="Brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BrandIcon />
                      </InputAdornment>
                    ),
                    sx: {
                      color: "black", // Set input text color to black
                    },
                  }}
                />
              </Tooltip>
            </Grid>

            {/* Buttons */}
            <Grid item xs={12}>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="contained"
                  startIcon={<ArrowBackIcon />}
                  color="error"
                  href="/"
                  style={{ marginRight: "8px" }} // Add some spacing between buttons
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  startIcon={<CheckIcon />}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>

        {/* Snackbar for Success Message */}
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Product logged successfully!
          </Alert>
        </Snackbar>

        {/* Confetti */}
        {isConfettiActive && <Confetti width={width} height={height} />}
      </Box>
    </Container>
  );
};

export default StockLoggingForm;
