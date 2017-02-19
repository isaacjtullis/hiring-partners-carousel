import React from 'react';
import ImageList from './ImageList.js';

const App = props => {
  return(
    <div>
      <ImageList images={props.data}/>
    </div>
  );
};
export default App;
