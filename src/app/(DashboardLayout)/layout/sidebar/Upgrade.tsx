import { Box, Typography, Button } from "@mui/material";

const Upgrade = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFAE1F",
        padding: 3,
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" color="text.primary" gutterBottom>
        Upgrade to Pro
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Unlock premium features with our Pro plan.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        href="/upgrade"
      >
        Upgrade Now
      </Button>
    </Box>
  );
};

export default Upgrade;
