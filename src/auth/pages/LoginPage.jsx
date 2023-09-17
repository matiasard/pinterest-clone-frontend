import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { loginRequest } from "../../api/auth";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "../hooks/useForm";

// interface LoginType {
//   email: string,
//   password: string;
// }

export const LoginPage = () => {
  const navigate = useNavigate();
  const { email, password, formState, onInputChange } =
    useForm({
      email: "",
      password: "",
    });
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);

  // * Formulario MUI Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    const resLogin = await loginRequest(email, password);

    console.log(resLogin.data);
    if (resLogin.data.ok) {
      setToken(resLogin.data.accessTokenKey);
      setProfile(resLogin.data.user);
  
      navigate("/home", { replace: true });
    } else {
      console.log("Error: no paso")
      console.log(resLogin)
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
                Iniciar Sesión
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={onInputChange}
                />
                <TextField
                  margin="normal"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  required
                  sx={{ mt: 1.5, mb: 1.5 }}
                  onChange={onInputChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 3 }}
                >
                  Iniciar Sesion
                </Button>
              </Box>
              <Grid item>
                <p>
                  ¿No tienes una cuenta?{" "}
                  <NavLink to={"/register"}>                    
                      Registrate
                  </NavLink>
                </p>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
