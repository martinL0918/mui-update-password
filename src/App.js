import{useState} from 'react';
import { Button, Typography, Grid, TextField, Icon, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import './App.css';
import { Box } from '@mui/system';

function App() {
  const [isResettingPassword, setIsResettingPassword] = useState(false)

  function handleClick() {
    setIsResettingPassword(!isResettingPassword)
  }

  return (<Box>
      <Grid container spacing={2}>
        {/* Username */}
        <Grid item xs={2} display="flex" alignItems="center">
          <Typography>username</Typography >
        </Grid>
        <Grid item xs={10}>
         <TextField></TextField>
        </Grid>
      {!isResettingPassword ?
        <>
          {/* Modify */}
          <Grid item xs={2} display="flex" alignItems="center">
            <Typography>Reset password</Typography >
          </Grid>
          <Grid item xs={10}>
          <IconButton onClick={handleClick}>
            <EditIcon />
            <Typography>Modify</Typography>
          </IconButton>
          </Grid>
        </>  
      : 
        <>
            <Grid item xs={2} display="flex" alignItems="center">
            <Typography>Old Password</Typography >
            </Grid>
            <Grid item xs={10}>
            <TextField></TextField>
            </Grid>
            {/*Old Password */}
            <Grid item xs={2} display="flex" alignItems="center">
            <Typography>New Password</Typography >
            </Grid>
            <Grid item xs={10}>
            <TextField></TextField>
            </Grid>
            {/*Old Password */}
            <Grid item xs={2} display="flex" alignItems="center">
            <Typography>New Password</Typography >
            </Grid>
            <Grid item xs={10}>
            <TextField></TextField>
            </Grid>
            {/*Confirm */}
            <Grid item xs={2} display="flex" alignItems="center">
            </Grid>
            <Grid item xs={10}>
            <Button variant="contained" onClick={handleClick}>Confirm</Button>
            </Grid>
        </>
    }
      </Grid>
    </Box>
  );
}

export default App;
