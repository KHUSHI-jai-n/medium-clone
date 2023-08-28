import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Content from './Components/Content';
import dataset from './data';
import Trending from './Components/trending';
function createEntry(content) {
  return (
    <Content
      key={content.id}
      img={content.imgURL}
      nme={content.name}
      hding={content.heading}
      p={content.para}
    />
  );
}
function App() {
  return (
    <div>
      <Header />
      <Main/>
      <Trending />
      <div className='content'>{dataset.map(createEntry)}</div>
    </div>
  );
}

export default App;
