import { GlobalStore } from './GlobalStore/GlobalStore';
import List from './components/List/List';

function App() {

  return (
    <div className="container">

      <GlobalStore>
        <List/>
      </GlobalStore>

    </div>
  );
}

export default App;
