import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Cookies from "js-cookie";
import { toaster } from '../../../utils/toaster';
import Iconify from '../../../components/iconify';

import { UserLogin } from '../../../services/AuthenticationServices'



// ----------------------------------------------------------------------

const InitialState = {
  username: "",
  password: ""
}
export default function LoginForm() {
  const navigate = useNavigate();
  const [state, setState] = useState(InitialState);
  const [showPassword, setShowPassword] = useState(false);


  const handleClick = () => {
    console.log("User data is", state)
    Login();
    // navigate('/dashboard', { replace: true });
  };
  const handleChange = ({ target: { name, value } }) => {
    const temp = { ...state };
    temp[name] = value;
    setState(temp);
  }
  // Api Call Function
  const Login = () => {
    // eslint-disable-next-line no-debugger
    debugger
    UserLogin(state).then(({ data }) => {
      if (data.token) {
        Cookies.set("jwToken", data.token);
        localStorage.setItem('token', data.token);
        const stateString = JSON.stringify(state);
        localStorage.setItem('userData', stateString);
        navigate("/dashboard");
      } else {
        toaster("Invalid Credential or Something went wrong", "error")
      }
    })
      .catch(error => {
        toaster("Something went wrong", "error")
      })
  }


  return (
    <>
      <Stack spacing={3}>
        <TextField name="username" label="User Name" onChange={handleChange} />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-off-fill' : 'ic:round-remove-red-eye'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        {/* <Checkbox name="remember" label="Remember me"  style={{color:"#323439"}}/>
        <Link variant="subtitle2" underline="hover"  style={{color:"#323439"}}>
          Forgot password?
        </Link> */}
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick} style={{ backgroundColor: "#323439", color: "#ffffff" }}>
        Sign
      </LoadingButton>
    </>
  );
}
