import 'App.css';
import Dropdown, {DropdownItem} from 'component/dropdown';

function App() {
  return (
    <div className="App">
      <Dropdown value={10}>
        <DropdownItem value={10}> 10 </DropdownItem>
        <DropdownItem value={20}> 20 </DropdownItem>
        <DropdownItem value={30}> 30 </DropdownItem>
        <DropdownItem value="40"> `40` </DropdownItem>
        <DropdownItem value="50"> `50` </DropdownItem>
      </Dropdown>
    </div>
  );
}

export default App;
