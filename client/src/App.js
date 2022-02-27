import React, { useEffect } from "react";
import { Container, Grid, Box } from "@material-ui/core";
import { Profile, Header, Footer } from "./components";
import { Portfolio, Resume, Contactme } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";
import "./App.css";
import { resumeData } from "./utils/resumeData";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
  },
});

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container className="mt-5">
          <Grid container spacing={7}>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Profile />
            </Grid>
            <Grid item xs>
              <Router>
                <Header />
                <Box className={`container-shadow main-content`}>
                  <Switch>
                    <Route path="/portfolio">
                      <Portfolio />
                    </Route>
                    <Route path="/contact">
                      <Contactme />
                    </Route>
                    <Route path="/">
                      <Resume />
                    </Route>
                  </Switch>
                </Box>
              </Router>

              {/*End Resume session */}
              {/* ----------------------- */}

              {/* Footer session */}
              <Footer name={resumeData.name} />
              {/*End Footer session */}
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
