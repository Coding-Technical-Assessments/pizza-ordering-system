"use client";

import PageHeaderComponent from "@/components/page-header";
import { useAppContext } from "@/context/app";
import { fetchToppings } from "@/services/toppings";
import ToppingsTable from "@/ui/tables/toppings";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const ToppingsPage = () => {
  const { spinner, setSpinner } = useAppContext();
  const [toppings, setToppings] = useState([]);

  const callFetchToppings = async () => {
    const fetchToppingsResponse = await fetchToppings();

    const isRequestFail = !fetchToppingsResponse?.toppings;

    setToppings(isRequestFail ? [] : fetchToppingsResponse?.toppings);
  };

  useEffect(() => {
    const fetchData = async () => {
      setSpinner(true);

      await callFetchToppings();

      setSpinner(false);
    };

    fetchData();
  }, []);

  return (
    <Box>
      <PageHeaderComponent heading="Toppings" />
      <ToppingsTable toppings={toppings} />
    </Box>
  );
};

export default ToppingsPage;
