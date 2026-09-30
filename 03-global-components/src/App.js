import React from 'react';
import Global from './Global';

const App = () => {
  const globalMessage = "Merhaba, Global Component";

  return (
    <div>
      <Global message={globalMessage} />
    </div>
  );
};

export default App;