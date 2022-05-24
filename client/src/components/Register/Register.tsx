import React, { FC, useState } from "react";
import styles from "./Register.module.scss";
import Axios from "axios";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface RegisterProps {}

export default function Register() {
  const [usernameRegister, setUsernameRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const register = () => {
    Axios.post("https://localhost3001/register", {
      username: usernameRegister,
      password: passwordRegister,
    }).then((response) => {
      console.log(response);
    });
  };

  const theme = createTheme();

  return (
    // <div className="registration">
    //   <h1>Register</h1>
    //   <label>Username</label>
    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       setUsernameRegister(e.target.value);
    //     }}
    //   />
    //   <label>Password</label>
    //   <input
    //     type="text"
    //     onChange={(e) => {
    //       setPasswordRegister(e.target.value);
    //     }}
    //   />
    //   <button onClick={register} >Register</button>
    // </div>
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate  sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={register}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  );
}
