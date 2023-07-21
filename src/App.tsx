import { useRoutes } from 'react-router-dom';
import routes from './router';
import './styles/app.scss';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const content = useRoutes(routes);

  return <div className='App'>{content}</div>;
}

export default App;
