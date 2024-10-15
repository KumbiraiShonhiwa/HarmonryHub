import React from "react";
import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#8E4739" }}>
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{ fontWeight: "bold", color: "textPrimary" }}
          >
            Harmony Hub
          </Typography>

          {/* Navigation Buttons */}
          <div>
            <Button
              component={Link}
              href="/authentication/login"
              variant="contained"
              color="primary"
              sx={{
                marginRight: 2,
                "&:hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              Log In
            </Button>
            <Button
              component={Link}
              href="/authentication/register"
              variant="outlined"
              color="secondary"
              sx={{
                "&:hover": {
                  backgroundColor: "primary.main",
                },
              }}
            >
              Get Started
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
