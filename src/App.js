import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import Navs from './Comp/Navs';
import Containers from './Comp/Container';
import Foot from './Comp/Foot';

function App() {
  return (
    <div className="App">
     <Navs/>
     <Containers/>
     <Foot/>
    </div>
  );
}

export default App;
