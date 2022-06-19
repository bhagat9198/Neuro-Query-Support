import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

let drawerWidth = 240;

export default function Footer(props) {
  const { hideDrawer } = props;

  if (hideDrawer) {
    drawerWidth = 0;
  }

  return (
    <Box
      sx={{
        background: "#94d4e0",
        opacity: 0.5,
        color: "black",
        display: "flex",
        alignItems: "center",
        p: 2,
        justifyContent: "space-between",
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          ml: `${drawerWidth}px`,
        }}
      >
        <Typography variant="h6">
          <AiOutlineCopyrightCircle /> 2022 Hackathon
        </Typography>
      </Box>
      <Box className="flex ">
        <Link
          to="/docs"
          style={{
            textDecoration: "none",
            color: "black",
            paddingLeft: "20px",
          }}
        >
          <Typography variant="h6">About Project</Typography>
        </Link>
        <Link
          to="/about-us"
          style={{
            textDecoration: "none",
            color: "black",
            paddingLeft: "20px",
          }}
        >
          <Typography variant="h6">About Us</Typography>
        </Link>
      </Box>
    </Box>
  );
}
