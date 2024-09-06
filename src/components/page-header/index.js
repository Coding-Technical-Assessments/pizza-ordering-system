import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";

const PageHeaderComponent = ({ heading = "" }) => {
  return (
    <Box
      sx={{
        mb: 5,
        p: 1,
        borderRadius: 1,
        bgcolor: useTheme().palette.grey[900],
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", color: "white" }}>
        {heading}
      </Typography>
    </Box>
  );
};

export default PageHeaderComponent;
