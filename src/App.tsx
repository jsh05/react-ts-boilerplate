import { Router } from './routes';
import { StyleProvider } from './style';

export const App = () => (
  <StyleProvider>
    <Router />
  </StyleProvider>
);
