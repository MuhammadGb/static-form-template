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
import { Link } from 'react-router-dom';
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
    '&$active': {
      backgroundColor:"blue",
      padding: "1px",
    },
    transition: theme.transitions.create(["background-color", "padding"], {duration: theme.transitions.duration.complex})
  },
  link: {
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
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [click, setClick] = React.useState(false);
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let handleClick = (event) => {
    return setClick(true);
  };
  
  let animationClasses = () =>(!click ? "": "active");
  handleClick= handleClick.bind(this)
  
  useEffect(() => {
    return ()=> {
      setClick(false)
    }
  }, [click])

  return (
    <div onClick={handleClick}>
      <Grid container spacing={1}>
        <Grid item xs={8} className={classes.gridOne}>
          <h5 className={classes.headerOne}>Step 1 of 3 <span><strong className={classes.boldInput}> . </strong> . .</span></h5>
          <h1 className={classes.headerTwo}>Let's set up your account</h1>
          <h5 className={classes.headerThree}>Already have an account? 
            <Link to='/filled_form' className={`${classes.firstLink}${animationClasses()}`}>
              <a> Sign in</a>
            </Link>
          </h5>
          <Paper className={classes.paperOne}>
            <FormControl className={classes.formControl} noValidate autoComplete="off">
            <TextField id="outlined-basic"  
              className={classes.formField} 
              label="Your name"
              defaultValue="Joe Blogs" 
              variant="outlined" 
            />
            <TextField
              error
              id="outlined-error-helper-text"
              label="Email address"
              defaultValue="joe.blogs2email.com"
              helperText="Please enter a valid email address."
              variant="outlined"
              className={classes.formField}
            />
            <FormControl className={classes.formField} disabled variant="outlined">
              <InputLabel >I would describe my user type as</InputLabel>
              <Select
                native
                labelId="demo-simple-select-outlined-label"
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
                <option aria-label="None" value=""/>
                <option value={10}>Developer</option>
                <option value={20}>Organisation</option>
                <option value={30}>Student</option>
                <option value={40}>Government</option>
              </Select>
            </FormControl>
            <FormControl className={clsx(classes.formField)} disabled variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
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
              <Button className={classes.button} disabled variant="contained" href="#contained-buttons">
                <strong>Next</strong>
              </Button>
            </div>
            <p>By clicking the "Next" button, you agree to creating a free account and to 
              <a href="#" className={classes.link}> Terms of Service  </a>and
              <a href="#" className={classes.link}> Privacy Policy.</a>
            </p>
          </FormControl>
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
