import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "../hooks/useForm";
import { registerRequest } from "../../api/auth";

export const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const { username, email, password, formState, onInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    setLoading(true);
    const resRegister = await registerRequest(username, email, password);
    console.log(resRegister.data);

    if (resRegister.data?.ok) {
      setLoading(false);
      console.log("ok: ", resRegister.data?.ok);
      navigate("/login", { replace: true });
    } else {
      setLoading(false);
      console.log("ok: ", resRegister.data?.ok);
    }
  };

  return (
    <div className="container animate__animated animate__fadeIn">
      <Container maxWidth="sm">
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Paper
              sx={{
                padding: "1.2em",
                borderRadius: "0.5em",
              }}
            >
              <Typography variant="h4" sx={{ mb: 1, mt: 1 }}>
                Registrarse
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  type="text"
                  name="username"
                  label="Username"
                  value={username}
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={onInputChange}
                />
                <TextField
                  margin="normal"
                  type="email"
                  name="email"
                  label="Email"
                  value={email}
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={onInputChange}
                />
                <TextField
                  margin="normal"
                  type="password"
                  name="password"
                  label="Password"
                  value={password}
                  fullWidth
                  required
                  sx={{ mt: 1.5, mb: 1.5 }}
                  onChange={onInputChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  sx={{ mt: 2, mb: 3 }}
                >
                  { loading
                    ? <CircularProgress />
                    : "Enviar"
                  }
                </Button>
              </Box>
              <Grid item>
                <p>
                  ¿Tienes una cuenta?{" "}
                  <NavLink to={"/auth/login"}>Iniciar Sesión</NavLink>
                </p>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
