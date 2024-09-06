import {
  Avatar,
  Box,
  Button,
  Grid2,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const PizzaEntry = ({ pizza, handleSelectedPizza }) => {
  return (
    <Grid2 size={3}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Avatar
          alt={pizza.name}
          src={pizza.image}
          sx={{ width: 100, height: 100 }}
        />

        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {pizza.name}
        </Typography>

        <Typography
          variant="caption"
          sx={{ textAlign: "center", minHeight: "60px" }}
        >
          {pizza.description}
        </Typography>
        
        <Box sx={{ mt: "auto" }}>
          {" "}
          <Button
            size="small"
            variant="contained"
            sx={{ bgcolor: useTheme().palette.grey[900], mt: 1 }}
            onClick={() => handleSelectedPizza(pizza)}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </Grid2>
  );
};

export default PizzaEntry;
