import { FC, memo } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import RouterComponent from "./routes";
const App: FC = memo(() => {
  return (
    <div>
      <GlobalStyles />
      <RouterComponent />
    </div>
  );
});
export default App;
