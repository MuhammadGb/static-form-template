import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  formControl:{
    '& > *': {
        width: 400,
      },
      margin: theme.spacing(1),
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
    },
  formField: {
    margin: theme.spacing(1),
  },
  align: {
    display: "flex",
    alignItems: "flex-start",
    margin: theme.spacing(1),
  },
  alignTwo: {
    padding: "18em",
  },
  buttonArea: {
    margin: theme.spacing(1),
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-start"
  },
  button: {
    width: 400,
    height: 50
  },
  headerOne: {
    marginRight: "0em",
    marginLeft: "85%",
  },
  headerTwo: {
    marginLeft: "0em",
    marginRight: "4%",
  },
  headerThree: {
    marginLeft: "0em",
    marginRight: "22%",
  },
  paperOne: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  gridTwo: {
    backgroundColor: "#2668ed",
  },
  paperTwo: {
    padding: "15em 5em 7em 5em",
    backgroundColor: "#2668ed",
    color: "white",
    textAlign: "justify"
  },
  firstLink: {
    textDecoration: "none",
    '&:visited': {
        color:"blue"
      },
    pointerEvents: "none",
    cursor: "default",
  },
  boldInput: {
    fontWeight: "bolder",
    fontSize: "1.3em"
  },
  link: {
    textDecoration: "none",
    '&:visited': {
        color:"blue"
      },
    pointerEvents: "none",
    cursor: "default",
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    password: "",
    showPassword: false,
    email: "", 
    emailError: "",
    isValid: false,
    userType: ""
  });

  const {name, password, email, userType} = values;
  const isDisabled = () => {
    if(name==="" || password==="" || userType==="" || !re.test(email)){
    return true;
    }else{
      return false;
    }
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validateEmail = emailString => {
    return re.test(emailString);
  };

  const handleEmailValidation = () => {
    if(values.email === "") {
      setValues({...values, emailError: "Please provide an email address."})
    }else if(validateEmail(values.email)) {
      setValues({...values, isValid: true, emailError: ""})
    }else{
      setValues({...values, emailError:"Please enter a valid email address."})
    }
  }
  
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={8} className={classes.gridOne}>
          <h5 className={classes.headerOne}>Step 1 of 3 
            <span>
              <strong className={classes.boldInput}> . </strong> . . .
            </span>
          </h5>
          <h1 className={classes.headerTwo}>Let's set up your account</h1>
          <h5 className={classes.headerThree}>Already have an account? 
            <a href="#" className={classes.firstLink}> Sign in</a>
          </h5>
          <Paper className={classes.paperOne}>
            <FormControl className={classes.formControl} autoComplete="off">
            <TextField id="outlined-basic"  
              className={classes.formField} 
              label="Your name"
              value={name}
              defaultValue="Joe Blogs"
              onChange={handleChange('name')} 
              variant="outlined" 
            />
            <TextField
              id="outlined-basic"
              label="Email address"
              value={email}
              defaultValue="joe.blogs@gmail.com"
              variant="outlined"
              error = {!re.test(email)}
              helperText={values.emailError}
              onChange={handleChange('email')}
              className={classes.formField}
              onBlur = {handleEmailValidation}
            />
            <FormControl className={classes.formField} variant="outlined">
              <InputLabel >I would describe my user type as</InputLabel>
              <Select
                native
                labelId="demo-simple-select-outlined-label"
                defaultValue={10}
                value={userType}
                onChange={handleChange('userType')}
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left"
                  },
                  getContentAnchorEl: null
                }}
                label="I would describe my user type as"
              >
                <option value=""/>
                <option value={10}>Developer</option>
                <option value={20}>Organisation</option>
                <option value={30}>Student</option>
                <option value={40}>Government</option>
              </Select>
            </FormControl>
            <FormControl className={clsx(classes.formField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={password}
                defaultValue='kjhkhhhjf'
                onChange={handleChange('password')}
                InputProps= {{
                  classes: {
                    input: classes.boldInput
                  }
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <div className={classes.buttonArea}>
              <p>Minimum of 8 characters.</p>
              <Button 
                className={classes.button}
                variant="contained"
                disabled = {isDisabled()} 
                color="primary" 
                href="#"
              >
                <strong>Next</strong>
              </Button>
            </div>
          </FormControl>
          <p>By clicking the "Next" button, you agree to creating a free account and to 
            <a href="#" className={classes.link}> Terms of Service  </a>and
            <a href="#" className={classes.link}> Privacy Policy.</a>
          </p>
        </Paper>
        </Grid>
        <Grid item xs={4} className={classes.gridTwo}>
          <Paper className={classes.paperTwo}>
            <Typography className={classes.footer}>
              <h2>Dummy Heading</h2>           
              <p>Lorem ipsum dolor amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud </p>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
