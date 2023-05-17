import { Container } from "@mui/material";
import { useCallback, useState } from "react";
import Form from "./components/Form";
import OverlayForm from "./components/OverlayForm";
import Header from "./components/Header";
import theme from "./theme";
import { OverlayBundle } from "@aries-bifold/oca/build/types";
import { CssBaseline } from '@mui/material'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

function App() {
  const [overlay, setOverlay] = useState<OverlayBundle | undefined>(undefined);

  const handleOverlay = useCallback((overlay: OverlayBundle | undefined) => {
    // TODO: Should validate the overlay here before setting it.
    setOverlay(overlay);
  }, []);

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Header />
          <div className="App">
            <Container >
              <Form onOverlay={handleOverlay} />
              {overlay && <OverlayForm overlay={overlay} />}
            </Container>
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
