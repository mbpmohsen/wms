import {Button, Card, Grid, TextField, Typography} from "@mui/material";

const Login = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" height="100vh" width="100vw">
            <Grid item xs={4}>
               <Card className="p-16">
                   <Grid container justifyContent="center" alignItems="center">
                       <Grid className="m-b-16" item xs={12}><TextField id="username" label="نام کاربری" variant="outlined" fullWidth /></Grid>
                       <Grid className="m-b-16" item xs={12}><TextField id="password" label="رمز عبور" variant="outlined" fullWidth /></Grid>
                       <Grid className="m-b-16" item xs={12}><Button variant="contained" fullWidth size="large">
                           <Typography variant="title1">
                               ورود
                           </Typography>
                       </Button></Grid>
                   </Grid>
               </Card>
            </Grid>
        </Grid>
    );
}

export default Login;
