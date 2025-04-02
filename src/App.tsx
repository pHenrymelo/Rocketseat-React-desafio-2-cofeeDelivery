import { ThemeProvider } from 'styled-components';
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';

export function App() {

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <h1>Coffee Delivery</h1>
      <GlobalStyle/>
    </ThemeProvider>
    
  )
}