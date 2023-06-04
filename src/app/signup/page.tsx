"use client";
import { useState, ChangeEvent } from "react";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import login_Style from "./signUp-page.module.scss";
import { CgInfinity } from "react-icons/cg";
import { IUserSignUpData } from "../interfaces/interfaces";

export default function SignUp() {
  const [userSignUpData, setUserSignUpData] = useState<IUserSignUpData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

  const handelInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserSignUpData((previousData: IUserSignUpData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handelButtnClick = () => {
    console.log(userSignUpData);
  };

  return (
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
                  Sign up to Spice{" "}
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
                    name="email"
                    onChange={handelInputChange}
                  />
                </Grid>
                <Grid container direction="column" alignItems="center">
                  <TextField
                    fullWidth
                    label="Password"
                    placeholder="Enter your password"
                    helperText="Enter your password"
                    name="password"
                    onChange={handelInputChange}
                  />
                </Grid>
                <Grid container direction="column" alignItems="center">
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    helperText="Confirm your password"
                    name="confirmPassword"
                    onChange={handelInputChange}
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
                    onClick={handelButtnClick}
                    disabled={isButtonDisabled}
                    fullWidth
                  >
                    Sign up
                  </Button>
                  <br />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
