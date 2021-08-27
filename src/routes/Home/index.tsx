import {
  FC, lazy, memo, Suspense,
} from 'react';
import Loader from '../../components/Loader';

const LazyView = lazy(() => import('./view'));
const Home: FC = memo((props) => (
  <Suspense fallback={<Loader />}>
    <LazyView {...props} />
  </Suspense>
));

export default Home;
