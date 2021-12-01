import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { PositionProvider } from '../src/contexts/PositionContext';


export function App() {
  
  return (
  
    <PositionProvider>
      <Header />
      <Dashboard  />
      <GlobalStyle />
    </PositionProvider>

  );
}

