import React, { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { username: "", password: "" };

    if (!formValues.username) {
      newErrors.username = "Username is required";
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
      console.log("Login submitted with values:", formValues);

      // Simulate a successful login
      setSuccessMessage("Login successful!");

      // Clear form values (optional)
      setFormValues({ username: "", password: "" });
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

      <Stack spacing={2}>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="username"
            mb="5px"
          >
            Username
          </Typography>
          <CustomTextField
            id="username"
            name="username"
            variant="outlined"
            fullWidth
            value={formValues.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
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
          />
        </Box>

        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          my={2}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
          </FormGroup>
          <Typography
            component={Link}
            href="/forgot-password"
            fontWeight="500"
            sx={{
              textDecoration: "none",
              color: "text.primary",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Forgot Password?
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <Button
          color="primary"
          variant="contained"
          href="\"
          size="large"
          fullWidth
          type="submit"
          sx={{
            "&:hover": {
              backgroundColor: "secondary.main",
            },
          }}
        >
          Sign In
        </Button>
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

export default AuthLogin;
