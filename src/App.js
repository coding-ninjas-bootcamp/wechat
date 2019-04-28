import React from 'react';

import Menu from './components/Menu';
import Channel from './components/Channel';
import Chat from './components/Chat';

import './App.css';

import { users, messages, channels } from './data';

class App extends React.PureComponent {
  state = {
    // User spread operator to avoid mutating the original data directly
    users: [...users],
    messages: [...messages],
    channels: [...channels],
  };

  render() {
    const { users, messages, channels } = this.state;
    console.log(users, messages, channels);
    return (
      <div className="app">
        <Menu />
        <Channel />
        <Chat />
      </div>
    );
  }
}

export default App;
