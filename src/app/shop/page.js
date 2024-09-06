"use client";

import { useAppContext } from "@/context/app";
import { Avatar, Box, Button, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchPizzas } from "@/services/pizzas";
import { useTheme } from "@mui/material";
import PizzaEntry from "@/ui/entries/pizza";
import PizzaAddToCartForm from "@/ui/forms/pizza";
import { fetchToppings } from "@/services/toppings";
import { fetchBases } from "@/services/bases";

const ShopPage = () => {
  const { spinner, setSpinner } = useAppContext();

  const [bases, setBases] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [toppings, setToppings] = useState([]);

  const [fetching, setFetching] = useState(true);
  const [fetched, setFetched] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const [cart, setCart] = useState([]);

  const callFetchPizzas = async () => {
    setFetching(true);

    const fetchPizzasResponse = await fetchPizzas();

    setFetching(false);
    setFetched(true);

    const isRequestFail = !fetchPizzasResponse?.pizzas;

    setPizzas(isRequestFail ? [] : fetchPizzasResponse?.pizzas);

    console.log("Fetch pizzas response", fetchPizzasResponse);
  };

  // fetch pizza toppings
  const callFetchToppings = async () => {
    const fetchToppingsResponse = await fetchToppings();

    const isRequestFail = !fetchToppingsResponse?.toppings;

    setToppings(isRequestFail ? [] : fetchToppingsResponse?.toppings);

    console.log("fetchToppingsResponse", fetchToppingsResponse);
  };

  // fetch pizza bases
  const callFetchBases = async () => {
    const fetchBasesResponse = await fetchBases();

    const isRequestFail = !fetchBasesResponse?.bases;

    setBases(isRequestFail ? [] : fetchBasesResponse?.bases);

    console.log("fetchBasesResponse", fetchBasesResponse);
  };

  const handleSelectedPizza = (pizza) => {
    setSelectedPizza(pizza);
  };

  useEffect(() => {
    const fetchData = async () => {
      setSpinner(true);

      await callFetchPizzas();
      await callFetchToppings();
      await callFetchBases();

      setSpinner(false);
    };

    fetchData();
  }, []);

  return (
    <Box>
      {selectedPizza && (
        <PizzaAddToCartForm
          pizza={selectedPizza}
          bases={bases}
          toppings={toppings}
          open={!!selectedPizza}
        />
      )}

      <Grid2 container spacing={2}>
        {pizzas.map((pizza, index) => (
          <PizzaEntry
            key={index}
            pizza={pizza}
            handleSelectedPizza={handleSelectedPizza}
          />
        ))}
      </Grid2>
    </Box>
  );
};

export default ShopPage;
