"use client";

import PageHeaderComponent from "@/components/page-header";
import { useAppContext } from "@/context/app";
import { fetchOrders } from "@/services/orders";
import UsersTable from "@/ui/tables/users";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const OrdersPage = () => {
  const { spinner, setSpinner } = useAppContext();
  const [orders, setOrders] = useState([]);

  const callFetchOrders = async () => {
    const fetchOrdersResponse = await fetchOrders();

    console.log("Fetch Orders Response", fetchOrdersResponse);

    const isRequestFail = !fetchOrdersResponse?.orders;

    setOrders(isRequestFail ? [] : fetchOrdersResponse?.orders);
  };

  useEffect(() => {
    const fetchData = async () => {
      setSpinner(true);

      await callFetchOrders();

      setSpinner(false);
    };

    fetchData();
  }, []);

  return (
    <Box>
      <PageHeaderComponent heading="Orders" />
      <UsersTable orders={orders} />
    </Box>
  );
};

export default OrdersPage;
