import { useRoutes } from 'react-router-dom';
import routes from './router';

import { TopNav, Navbar } from './components';
import './styles/app.scss';

function App() {
  const content = useRoutes(routes);

  return (
    <div className='App'>
      <TopNav />
      <Navbar />
      {content}
    </div>
  );
}

export default App;
