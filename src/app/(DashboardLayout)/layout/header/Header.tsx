import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Badge,
  Button,
  Typography,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import PropTypes from "prop-types";
import Link from "next/link";
import Profile from "./Profile";
import {
  IconBellRinging,
  IconMenu,
  IconShoppingCart,
  IconHeart,
} from "@tabler/icons-react";

// Sample product data
const sampleProducts = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 15 },
  { id: 3, name: "Product C", price: 20 },
];

const Header = ({
  toggleMobileSidebar,
}: {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  const [anchorElCart, setAnchorElCart] = useState<null | HTMLElement>(null);
  const [anchorElWishlist, setAnchorElWishlist] = useState<null | HTMLElement>(
    null
  );
  const [cart, setCart] = useState(sampleProducts);
  const [wishlist, setWishlist] = useState(sampleProducts);

  const openCart = Boolean(anchorElCart);
  const openWishlist = Boolean(anchorElWishlist);

  const handleClickCart = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCart(event.currentTarget);
  };

  const handleCloseCart = () => {
    setAnchorElCart(null);
  };

  const handleClickWishlist = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElWishlist(event.currentTarget);
  };

  const handleCloseWishlist = () => {
    setAnchorElWishlist(null);
  };

  const handleAddAllToCart = () => {
    setCart([...cart, ...wishlist]);
    setWishlist([]);
  };

  const handleRemoveAllFromWishlist = () => {
    setWishlist([]);
  };

  const handleRemoveAllFromCart = () => {
    setCart([]);
  };

  const handleRemoveProductFromCart = (productId: number) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const handleRemoveProductFromWishlist = (productId: number) => {
    setWishlist(wishlist.filter((product) => product.id !== productId));
  };

  const totalCartPrice = cart.reduce(
    (total, product) => total + product.price,
    0
  );
  const totalWishlistPrice = wishlist.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {" "}
        {/* Align items with space between */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>
        <Typography
          variant="h2"
          component="div"
          color="text.secondary"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Harmony Hub
        </Typography>
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <IconButton
            size="large"
            aria-label="show cart"
            onClick={handleClickCart}
          >
            <Badge badgeContent={cart.length} color="secondary">
              <IconShoppingCart size="24" />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={anchorElCart}
            open={openCart}
            onClose={handleCloseCart}
            PaperProps={{
              sx: {
                width: 300,
                maxHeight: 400,
                backgroundColor: "#8E4739", // Set background color to red
                color: "text.primary",
              },
            }}
          >
            {cart.length > 0 ? (
              <>
                {cart.map((product) => (
                  <MenuItem key={product.id}>
                    <Typography variant="body2" color="text.primary">
                      {product.name} - ${product.price.toFixed(2)}
                    </Typography>
                    <IconButton
                      edge="end"
                      color="inherit"
                      onClick={() => handleRemoveProductFromCart(product.id)}
                    >
                      <IconShoppingCart />
                    </IconButton>
                  </MenuItem>
                ))}
                <Divider />
                <MenuItem>
                  <Button onClick={handleRemoveAllFromCart}>Remove All</Button>
                  <Button component={Link} href="/checkout" sx={{ ml: 2 }}>
                    Checkout
                  </Button>
                </MenuItem>
              </>
            ) : (
              <MenuItem>No products in cart</MenuItem>
            )}
          </Menu>

          <IconButton
            size="large"
            aria-label="show wishlist"
            color="black"
            onClick={handleClickWishlist}
          >
            <Badge badgeContent={wishlist.length} color="secondary">
              <IconHeart size="24" />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={anchorElWishlist}
            open={openWishlist}
            onClose={handleCloseWishlist}
            PaperProps={{
              sx: {
                width: 300,
                maxHeight: 400,
                backgroundColor: "#8E4739", // Set background color to red
                color: "text.primary",
              },
            }}
          >
            {wishlist.length > 0 ? (
              <>
                {wishlist.map((product) => (
                  <MenuItem key={product.id}>
                    <Typography variant="body2">
                      {product.name} - ${product.price.toFixed(2)}
                    </Typography>
                    <IconButton
                      edge="end"
                      color="inherit"
                      onClick={() =>
                        handleRemoveProductFromWishlist(product.id)
                      }
                    >
                      <IconHeart />
                    </IconButton>
                  </MenuItem>
                ))}
                <Divider />
                <MenuItem>
                  <Button onClick={handleAddAllToCart} color="primary">
                    Add All to Cart
                  </Button>
                  <Button onClick={handleRemoveAllFromWishlist} color="primary">
                    Remove All
                  </Button>
                </MenuItem>
              </>
            ) : (
              <MenuItem>No products in wishlist</MenuItem>
            )}
          </Menu>
          <Profile />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  toggleMobileSidebar: PropTypes.func.isRequired,
};

export default Header;
