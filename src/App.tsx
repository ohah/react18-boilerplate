import 'App.css';
import Tab, {TabProps} from 'component/tab';

function App() {
  const TabData: TabProps[] = [
    {title: <div> 탭1</div>, content: <div> 내용 </div>},
    {title: <div> 탭2</div>, content: <div> 내용2 </div>},
  ];
  return (
    <div className="App">
      <Tab data={TabData} />
    </div>
  );
}

export default App;
