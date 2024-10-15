import React, { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

interface registerType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (!formValues.name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    }
    if (!formValues.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Mock form submission logic
      console.log("Form submitted with values:", formValues);

      // Simulate a successful submission
      setSuccessMessage("Registration successful!");

      // Clear form values (optional)
      setFormValues({ name: "", email: "", password: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {title && (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      )}

      {subtext}

      <Box>
        <Stack spacing={3}>
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="name"
              mb="5px"
            >
              Name
            </Typography>
            <CustomTextField
              id="name"
              name="name"
              variant="outlined"
              fullWidth
              value={formValues.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Box>

          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="email"
              mb="5px"
            >
              Email Address
            </Typography>
            <CustomTextField
              id="email"
              name="email"
              variant="outlined"
              fullWidth
              value={formValues.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Box>

          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
            >
              Password
            </Typography>
            <CustomTextField
              id="password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              value={formValues.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              sx={{ marginRight: 2 }}
            />
          </Box>
          <Box>
            <Button
              color="primary"
              variant="contained"
              size="large"
              href="\"
              fullWidth
              type="submit"
              sx={{
                "&:hover": {
                  backgroundColor: "secondary.main",
                },
                marginRight: 2,
              }}
            >
              Sign Up
            </Button>
          </Box>
          <Box>
            {" "}
            By signing up, you agree to our Terms and Conditions, Data Policy
            and Cookies Policy.
          </Box>
        </Stack>
      </Box>
      {successMessage && (
        <Typography color="success.main" mt={2}>
          {successMessage}
        </Typography>
      )}
      {subtitle}
    </form>
  );
};

export default AuthRegister;
