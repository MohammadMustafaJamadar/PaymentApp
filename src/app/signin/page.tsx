"use client";
import { IUserLoginData } from "../interfaces/interfaces";
import { useState, ChangeEvent } from "react";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import login_Style from "./login-page.module.scss";
import Link from "next/link";
import { CgInfinity } from "react-icons/cg";

export default function Login() {
  const [userLoginData, setUSerLoginData] = useState<IUserLoginData>({
    email: "",
    password: "",
  });

  const emailInputChnger = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    setUSerLoginData({ ...userLoginData, email: newValue });
  };
  const passInputChnger = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;
    setUSerLoginData({ ...userLoginData, password: newValue });
  };
  const handleClick = () => {
    console.log(userLoginData);
  };
  return (
    <>
      <div className={login_Style.backGround_Image}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Paper
              elevation={3}
              style={{
                padding: "10px",
                marginTop: "100px",
                borderRadius: "20px",
                marginBottom: "25px",
              }}
              
            >
              <Grid container justifyContent="center">
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <Typography
                    variant="h4"
                    component="h1"
                    style={{ marginTop: "30px" }}
                  >
                    Sign in to Spice{" "}
                    <span>
                      <CgInfinity />
                    </span>
                  </Typography>{" "}
                  <br />
                  <Grid container direction="column" alignItems="center">
                    <TextField
                      fullWidth
                      label="Email"
                      placeholder="Enter your email"
                      helperText="Enter your email"
                      onChange={emailInputChnger}
                    />
                  </Grid>
                  <Grid container direction="column" alignItems="center">
                    <TextField
                      fullWidth
                      label="Password"
                      placeholder="Enter your password"
                      helperText="Enter your password"
                      onChange={passInputChnger}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    textAlign="center"
                  >
                    <Button
                      variant="contained"
                      color="warning"
                      fullWidth
                      onClick={handleClick}
                    >
                      Sign in
                    </Button>
                    <br />
                  </Grid>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    marginBottom="20px"
                  >
                    Don't have account?
                    <Link
                      href="/signup"
                      style={{ textDecoration: "none", color: "maroon" }}
                    >
                      Sign up
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
