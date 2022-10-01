import React from 'react';
import 'App.css';
import Tooltip from 'component/Tooltip';

function App() {
  return (
    <div className="App">
      <Tooltip title="타이틀" arrow placement="top">
        <div> top </div>
      </Tooltip>
      <Tooltip title="타이틀" arrow placement="left">
        <div> left </div>
      </Tooltip>
      <Tooltip title="타이틀" arrow placement="bottom">
        <div> right </div>
      </Tooltip>
      <Tooltip title="타이틀" arrow placement="right">
        <div> bottom </div>
      </Tooltip>
    </div>
  );
}

export default App;
