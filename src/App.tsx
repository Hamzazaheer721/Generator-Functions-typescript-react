import { FC, memo } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import RouterComponent from './routes';

const App: FC = memo(() => (
  <div>
    <GlobalStyles />
    <RouterComponent />
  </div>
));
export default App;
