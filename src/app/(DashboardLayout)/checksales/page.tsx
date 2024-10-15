"use client"; // Ensures it's a client component in Next.js

import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import { Container, Typography, Box, Grid } from "@mui/material";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale, // Register the "category" scale
  LinearScale, // Register linear scale for the charts
  BarElement, // Register Bar element for Bar charts
  Title, // Register Title plugin
  Tooltip, // Register Tooltip plugin
  Legend, // Register Legend plugin
  ArcElement, // Register Arc element for Pie charts
  PointElement, // Register Point element for Line charts
  LineElement // Register Line element for Line charts
);

const SalesOverviewPage = () => {
  const mockSalesData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [1200, 1900, 3000, 5000, 2000],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const mockPieData = {
    labels: ["Cost", "Profit"],
    datasets: [
      {
        data: [3000, 7000],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const mockRevenueData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 19000, 15000, 50000, 20000],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          textAlign: "center",
          color: "black",
        }}
      >
        Sales Overview
      </Typography>

      {/* Pink box with rounded corners */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          {" "}
          <Box
            sx={{
              p: 4,
              
              backgroundColor: "#e9d9c8",
              margin: "auto",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h4"
              color="text.secondary"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Sales Data
            </Typography>
            <Bar data={mockSalesData} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          {" "}
          <Box
            sx={{
              p: 4,
              
              backgroundColor: "#e9d9c8",
              margin: "auto",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            {" "}
            <Typography
              variant="h4"
              color="text.secondary"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Costs vs Profit
            </Typography>
            <Pie data={mockPieData} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          {" "}
          <Box
            sx={{
              p: 4,
              
              backgroundColor: "#e9d9c8",
              margin: "auto",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <Typography
              color="text.secondary"
              variant="h4"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Monthly Revenue
            </Typography>
            <Line data={mockRevenueData} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SalesOverviewPage;
