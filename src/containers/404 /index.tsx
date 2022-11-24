import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back Home
      </Button>
    </Box>
  );
};
export default Error;
