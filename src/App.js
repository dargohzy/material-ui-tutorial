
import React from 'react'
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Checkbox from '@material-ui/core/Checkbox'
import Textfield from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { cyan } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Appbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'cyan',
    padding: '15px',
    border: 0,
    borderRadius:  15
  }
})

const theme = createMuiTheme({
    typography: {
      h2: {
        fontSize: 40,
      }
    },
    palette: { 
      primary: {
      main: cyan[500],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={(e)=>setChecked(e.target.checked)}
      />
    </div>
  )
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='100%'>
      <div className="App">
        <header className="App-header">
          <Appbar>
            <Toolbar>
              <IconButton>
                <MenuIcon/>
              </IconButton>
              <Typography>
                MUI Theming
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </Appbar>
          <Typography 
            variant='h2'>
            Hi all this is a h2
          </Typography>
          <Typography 
            variant='body1' component="div">
            Learn how to use Material UI
          </Typography>

          <Grid container spacing={2} justify='center'>
            <Grid item>
              <Paper style={{ height:75, width:50}} />
            </Grid>
            <Grid item>
              <Paper style={{ height:75, width:50}} />
            </Grid>
            <Grid item>
              <Paper style={{ height:75, width:50}} />
            </Grid>
          </Grid>

          <ButtonStyled></ButtonStyled>
          <Textfield 
            variant="outlined"
            color="secondary"
            type="date" 
          />
        <CheckboxExample />
          <ButtonGroup>
            <Button
              startIcon={<SaveIcon />}
              href="#" 
              style={{
                fontSize:24
              }}
              onClick={()=>alert('Hello')} 
              variant="contained" 
              color="primary">
                Save
            </Button>
            <Button
              startIcon={<SaveIcon />}
              href="#" 
              style={{
                fontSize:24
              }}
              onClick={()=>alert('Hello')} 
              variant="contained" 
              color="secondary">
                Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
