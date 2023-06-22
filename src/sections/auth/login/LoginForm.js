// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // @mui
// import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
// import { LoadingButton } from '@mui/lab';
// // components
// import Cookies from "js-cookie";
// import { toaster } from '../../../utils/toaster';
// import Iconify from '../../../components/iconify';

// import { UserLogin } from '../../../services/AuthenticationServices'



// // ----------------------------------------------------------------------

// const InitialState = {
//   username: "",
//   password: ""
// }
// export default function LoginForm() {
//   const navigate = useNavigate();
//   const [state, setState] = useState(InitialState);
//   const [showPassword, setShowPassword] = useState(false);


//   const handleClick = () => {
//     console.log("User data is", state)
//     Login();
//     // navigate('/dashboard', { replace: true });
//   };
//   const handleChange = ({ target: { name, value } }) => {
//     const temp = { ...state };
//     temp[name] = value;
//     setState(temp);
//   }
//   // Api Call Function
//   const Login = () => {
//     // eslint-disable-next-line no-debugger
//     debugger
//     UserLogin(state).then(({ data }) => {
//       if (data.token) {
//         Cookies.set("jwToken", data.token);
//         localStorage.setItem('token', data.token);
//         const stateString = state.username;
//         localStorage.setItem('userData', stateString);
//         navigate("/dashboard");
//       } else {
//            // eslint-disable-next-line no-debugger
//     debugger
//         toaster("Invalid Credential or Something went wrong", "error")
//       }
//     })
//       .catch(error => {
//         // console.log("Error is",error)
//         // // toaster("Something went wrong", "error")
//         toaster("Invalid Credential or Something went wrong", "error")
//       })
//   }


//   return (
//     <>
//       <Stack spacing={3}>
//         <TextField name="username" label="User Name" onChange={handleChange} />

//         <TextField
//           name="password"
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           onChange={handleChange}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                   <Iconify icon={showPassword ? 'eva:eye-off-fill' : 'ic:round-remove-red-eye'} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Stack>

//       <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
//         {/* <Checkbox name="remember" label="Remember me"  style={{color:"#323439"}}/>
//         <Link variant="subtitle2" underline="hover"  style={{color:"#323439"}}>
//           Forgot password?
//         </Link> */}
//       </Stack>

//       <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick} style={{ backgroundColor: "#323439", color: "#ffffff" }}>
//         Sign
//       </LoadingButton>
//     </>
//   );
// }
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Cookies from "js-cookie";
import { toaster } from '../../../utils/toaster';
import Iconify from '../../../components/iconify';

import { UserLogin } from '../../../services/AuthenticationServices';

// ----------------------------------------------------------------------

const InitialState = {
  username: "",
  password: ""
};

export default function LoginForm() {
  const navigate = useNavigate();
  const [state, setState] = useState(InitialState);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  const handleClick = () => {
    if (validateForm()) {
      Login();
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    const temp = { ...state };
    temp[name] = value.trim();
    setState(temp);

    if (name === "username") {
      if (value.trim() === "") {
        setErrors((prevErrors) => ({ ...prevErrors, username: "Username is required" }));
      } else if (value.includes(" ")) {
        setErrors((prevErrors) => ({ ...prevErrors, username: "Username cannot contain spaces" }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
      }
    } else if (name === "password") {
      if (value.trim() === "") {
        setErrors((prevErrors) => ({ ...prevErrors, password: "Password is required" }));
      } else if (value.length < 8) {
        setErrors((prevErrors) => ({ ...prevErrors, password: "Password must be at least 8 characters long" }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
      }
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (state.username.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, username: "Username is required" }));
      isValid = false;
    }

    if (state.password.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Password is required" }));
      isValid = false;
    }

    if (state.username.includes(" ")) {
      setErrors((prevErrors) => ({ ...prevErrors, username: "Username cannot contain spaces" }));
      isValid = false;
    }

    if (state.password.length < 8) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Password must be at least 8 characters long" }));
      isValid = false;
    }

    return isValid;
  };

  const Login = () => {
        // eslint-disable-next-line no-debugger
        debugger
        UserLogin(state).then(({ data }) => {
          if (data.token) {
            Cookies.set("jwToken", data.token);
            localStorage.setItem('token', data.token);
            const stateString = state.username;
            localStorage.setItem('userData', stateString);
            navigate("/dashboard");
          } else {
               // eslint-disable-next-line no-debugger
        debugger
            // toaster("Invalid Credential or Something went wrong", "error")
            const stateString = state.username;
            localStorage.setItem('userData', stateString);
            navigate("/dashboard");
          }
        })
          .catch(error => {
            // console.log("Error is",error)
            // // toaster("Something went wrong", "error")
            // toaster("Invalid Credential or Something went wrong in Catch", "error")
            const stateString = state.username;
            localStorage.setItem('userData', stateString);
            navigate("/dashboard");
          })
      }

  return (
    <>
      <Stack spacing={3}>
        <TextField
          name="username"
          label="User Name"
          onChange={handleChange}
          error={!!errors.username}
          helperText={errors.username}
        />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
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

      

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick}
        style={{ backgroundColor: "#323439", color: "#ffffff",marginTop:"2rem" }}
      >
        Sign
      </LoadingButton>
    </>
  );
}
