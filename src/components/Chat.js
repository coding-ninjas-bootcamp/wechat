import React from 'react';

import './Chat.css';

class Chat extends React.PureComponent {
  render() {
    return (
      <main className="chat">
        <header className="header">Name</header>
        <ul className="messages">
          <li className="message right">Hello?</li>
          <li className="message right">Are you there?</li>
          <li className="message left">Hi, how can I help you?</li>
        </ul>
        <textarea className="textarea" />
      </main>
    );
  }
}

export default Chat;
