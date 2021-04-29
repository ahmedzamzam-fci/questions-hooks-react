import React from 'react';
import Accordion from './components/accordion';
import Search from './components/search';
import Translate from './components/translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'Why React',
    content: 'Because React is used and supported By FaceBook',
  },
  {
    title: 'Who is Using React',
    content: 'Fb , swvl , IBM , Amazon',
  },
];

export default () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
