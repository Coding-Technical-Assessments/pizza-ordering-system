"use client";

import { useAppContext } from "@/context/app";
import { fetchPizzas } from "@/services/pizzas";
import PizzasTable from "@/ui/tables/pizza";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import PageHeaderComponent from "@/components/page-header";

const PizzasPage = () => {
  const { spinner, setSpinner } = useAppContext();
  const [pizzas, setPizzas] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [fetched, setFetched] = useState(false);

  const callFetchPizzas = async () => {
    setFetching(true);

    const fetchPizzasResponse = await fetchPizzas();

    setFetching(false);
    setFetched(true);

    const isRequestFail = !fetchPizzasResponse?.pizzas;

    setPizzas(isRequestFail ? [] : fetchPizzasResponse?.pizzas);

    console.log("Fetch pizzas response", fetchPizzasResponse.pizzas);
  };

  useEffect(() => {
    const fetchData = async () => {
      setSpinner(true);

      await callFetchPizzas();

      setSpinner(false);
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        overflowY: "hidden",
      }}
    >
      <PageHeaderComponent heading="Pizzas"/>

      {fetching ? (
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Fetching yummy pizzas
        </Typography>
      ) : fetched && pizzas.length == 0 ? (
        <Box>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            No pizzas were found
          </Typography>
        </Box>
      ) : (
        <PizzasTable pizzas={pizzas} />
      )}
    </Box>
  );
};

export default PizzasPage;
