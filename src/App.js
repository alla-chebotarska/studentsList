import { Grid } from '@material-ui/core';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import StudentsList from './components/StudentsList/StudentsList';

const theme = createTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      "Raleway",
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const useStyles = makeStyles((theme) => ({
  appContainer: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: '#EFEFEF',
    minHeight: '100vh',
    alignItems: 'flex-start',
  },
}));


function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container
        className={classes.appContainer}
        alignItems="center"
        justifyContent="center">
        <Grid item xs={10} md={8}>
            <StudentsList />
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}

export default App;
