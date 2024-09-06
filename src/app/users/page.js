"use client";

import PageHeaderComponent from "@/components/page-header";
import { useAppContext } from "@/context/app";
import { fetchUsers } from "@/services/users";
import UsersTable from "@/ui/tables/users";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const UsersPage = () => {
  const { spinner, setSpinner } = useAppContext();
  const [users, setUsers] = useState([]);

  const callFetchUsers = async () => {
    const fetchUsersResponse = await fetchUsers();

    console.log("Fetch Users Response", fetchUsersResponse);

    const isRequestFail = !fetchUsersResponse?.users;

    setUsers(isRequestFail ? [] : fetchUsersResponse?.users);
  };

  useEffect(() => {
    const fetchData = async () => {
      setSpinner(true);

      await callFetchUsers();

      setSpinner(false);
    };

    fetchData();
  }, []);

  return (
    <Box>
      <PageHeaderComponent heading="Users" />
      <UsersTable users={users} />
    </Box>
  );
};

export default UsersPage;
