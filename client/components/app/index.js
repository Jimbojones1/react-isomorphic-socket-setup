import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// don't need a name cuz were just importing file
import {} from './style.less';
import MessageList from '../components/message-list';
import MessageEntryBox from '../components/message-entry-box';
import * as messageActionCreators from '../actions/message-actions';

class App extends Component {
  render(){

    {
      messages,
      currentMessage,
      addMessage
    } = this.props;

    return (
            <div>
              <MessageList messages={messages} />
              <MessageEntryBox
                value={currentMessage}
                onChange={updateMessage}
                onSubmit={addMessage} />
            </div>
          )
  }
}

function mapStateToProps(state){
  return {
    messages: state.messages,
    currentMessage: state.currentMessage
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(messageActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
