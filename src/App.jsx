import { createRoot } from 'react-dom';
import Pet from './Pet';

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" anmal="dog" breed="Corgi" />
    <Pet name="Pepper" anmal="bird" breed="Cockatiel" />
    <Pet name="Doink" anmal="cat" breed="Mixed" />1
  </div>;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
