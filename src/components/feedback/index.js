"use client";

import { useAppContext } from "@/context/app";
import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const FeedbackComponents = () => {
  const { spinner, setSpinner } = useAppContext();

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={spinner}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default FeedbackComponents;
