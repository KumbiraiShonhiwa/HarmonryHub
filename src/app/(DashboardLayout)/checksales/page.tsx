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
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const chartOptions = {
  maintainAspectRatio: false, // Ensures aspect ratio is not fixed
  responsive: true, // Makes the chart responsive
};

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

  const mockProfitGrowthData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Profit Growth",
        data: [500, 800, 1500, 2000, 2500],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const mockRegionSalesData = {
    labels: ["North", "South", "East", "West"],
    datasets: [
      {
        label: "Region Sales",
        data: [5000, 4000, 3000, 2000],
        backgroundColor: ["#FFCE56", "#FF6384", "#36A2EB", "#4BC0C0"],
      },
    ],
  };

  const mockYearlyRevenueData = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Yearly Revenue",
        data: [10000, 15000, 20000, 30000, 40000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const mockQuarterlyProfitData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Quarterly Profit",
        data: [5000, 10000, 15000, 20000],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  const mockProductCategoryData = {
    labels: ["Electronic", "Piano", "String", "Bass"],
    datasets: [
      {
        label: "Product Category Sales",
        data: [12000, 9000, 7000, 3000],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#4BC0C0"],
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
          color: "#5A6A85",
        }}
      >
        Sales Overview
      </Typography>

      <Grid container spacing={3}>
        {/* Common styling for charts */}
        {[
          { title: "Sales Data", data: mockSalesData, type: Bar },
          { title: "Costs vs Profit", data: mockPieData, type: Pie },
          { title: "Monthly Revenue", data: mockRevenueData, type: Line },
          { title: "Profit Growth", data: mockProfitGrowthData, type: Bar },
          { title: "Sales by Region", data: mockRegionSalesData, type: Pie },
          { title: "Yearly Revenue", data: mockYearlyRevenueData, type: Line },
          { title: "Quarterly Profit", data: mockQuarterlyProfitData, type: Bar },
          { title: "Product Category Sales", data: mockProductCategoryData, type: Pie },
        ].map((chart, index) => (
          <Grid item xs={12} lg={4} key={index}>
            <Box
              sx={{
                p: 4,
                backgroundColor: "#e9d9c8",
                margin: "auto",
                boxShadow: 3,
                borderRadius: 2,
                height: "400px", // Uniform height
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
                {chart.title}
              </Typography>
              <chart.type data={chart.data} options={chartOptions} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SalesOverviewPage;
