"use client";
import { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Divider,
  Box
} from "@mui/material";

const CheckoutPage = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle checkout
    console.log("Checkout data submitted:", formValues);
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 600, margin: "20px auto" }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              name="fullName"
              fullWidth
              value={formValues.fullName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              fullWidth
              value={formValues.address}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="City"
              name="city"
              fullWidth
              value={formValues.city}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="State"
              name="state"
              fullWidth
              value={formValues.state}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="ZIP Code"
              name="zip"
              fullWidth
              value={formValues.zip}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="h6" gutterBottom>
              Payment Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name on Card"
              name="cardName"
              fullWidth
              value={formValues.cardName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Card Number"
              name="cardNumber"
              fullWidth
              value={formValues.cardNumber}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Expiration Date"
              name="expDate"
              fullWidth
              value={formValues.expDate}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CVV"
              name="cvv"
              fullWidth
              value={formValues.cvv}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between">
              {" "}
              <Button variant="contained" color="error">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="success">
                Complete Purchase
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CheckoutPage;
