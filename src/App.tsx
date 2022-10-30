import React, { useState } from 'react';
import 'App.css';
import Tooltip from 'components/Tooltip';

function App() {
  return (
    <div className="App">

      <Tooltip title="타이틀" content="콘텐츠">
        <div> 툴팁 </div>
      </Tooltip>
    </div>
  );
}

export default App;
