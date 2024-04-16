import React from "react";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";


export default function Footer(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" left="0" bottom="0" width="100%" {...props} sx={{mt:5}}>
        {'Copyright © '}
        <Link color="inherit" href="https://meetq-frontend.onrender.com/">
          MeetQ - Selen Bayram, Ayesha Nasir, Zula Lkhagvajav
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }