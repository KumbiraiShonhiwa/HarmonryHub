"use client";
import { useState } from "react";
import { Box, Typography, CardMedia, Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

const ProductDetail = ({ product, onBack }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  if (!product) {
    return <Typography>No product selected</Typography>;
  }

  const handleCartClick = () => {
    setIsInCart(!isInCart);
  };

  const handleWishlistClick = () => {
    setIsInWishlist(!isInWishlist);
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 4,
        px: 2,
        borderRadius: "12px", // Rounded corners for the container
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // Card shadow for the container
        transition: "box-shadow 0.3s",
        "&:hover": {
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)", // Elevation on hover
        },
      }}
    >
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "900px",
          flex: 1,

          p: 2,
        }}
      >
        {/* Image on the left */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            width: "50%",
            mr: 4,
          }}
        >
          <CardMedia
            component="img"
            image={product.imageUrl}
            alt={product.name}
            sx={{
              width: "100%",
              height: "750px",
              maxHeight: "2600px",
              borderRadius: "12px", // Rounded corners for the image
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)", // Card shadow for the image
            }}
          />
        </Box>

        {/* Details on the right */}
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              mt: 4,
              p: 2,
              border: "1px solid #412711",
              borderRadius: "12px", // Rounded corners for the product details section
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)", // Card shadow for the details section
              "&:hover": {
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)", // Hover shadow effect
              },
            }}
          >
            <Typography variant="h3" color="text.secondary">
              {product.name}
            </Typography>
            <Typography variant="h4" color="text.secondary" sx={{ mt: 2 }}>
              Price: ${product.price.toFixed(2)}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                onClick={handleCartClick}
                sx={{
                  color: isInCart ? "#412711" : "#FFAE1F",
                  transition: "color 0.3s", // Smooth transition for icon color
                }}
              >
                <ShoppingCartIcon />
                {isInCart ? "Remove from Cart" : "Add to Cart"}
              </IconButton>
              <IconButton
                onClick={handleWishlistClick}
                sx={{
                  color: isInWishlist ? "red" : "#539BFF",
                  ml: 2,
                  transition: "color 0.3s", // Smooth transition for icon color
                }}
              >
                <FavoriteIcon />
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </IconButton>
            </Box>
          </Box>

          {/* Product Description */}
          <Box
            sx={{
              mt: 4,
              p: 2,
              border: "1px solid #412711",
              borderRadius: "12px", // Rounded corners for the description box
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)", // Card shadow for the description
              "&:hover": {
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)", // Hover shadow effect
              },
            }}
          >
            <Typography variant="body1" color="text.secondary">
              <strong>{product.description}</strong>
            </Typography>
          </Box>

          {/* Product Details */}
          <Box
            sx={{
              mt: 4,
              p: 2,
              border: "1px solid #412711",
              borderRadius: "12px", // Rounded corners for the details box
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)", // Card shadow for the details
              "&:hover": {
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)", // Hover shadow effect
              },
            }}
          >
            <Typography variant="h4" color="text.secondary" sx={{ mb: 2 }}>
              <strong>Product Details</strong>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <strong>Shipping Time:</strong> 3-5 Business Days
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              <strong>Reviews:</strong>{" "}
              <StarIcon color="warning" fontSize="small" /> 4.5 (120 reviews)
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              <strong>Eligible for Cash on Delivery:</strong> Yes
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              <strong>Free Delivery Available:</strong> Yes
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              <strong>Hassle-Free Exchanges & Returns:</strong> 30 Days
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              <strong>6-Month Limited Warranty:</strong> Yes
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          color="error"
          onClick={onBack}
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 1,
            borderRadius: "8px", // Rounded corners for the button
          }}
        >
          Back to Products
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetail;
