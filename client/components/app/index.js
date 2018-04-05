import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// don't need a name cuz were just importing file
import {} from './style.less';
import MessageList from 'components/message-list';
import MessageEntryBox from 'components/message-input-box';
import * as messageActionCreators from 'actions/message-actions';
import { hot } from 'react-hot-loader';

class App extends Component {
  render(){

   const {
      messages,
      currentMessage,
      addMessage,
      updateMessage
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

// Injects action Creator functions into the component properties that
// dispatch the returnecd action objects to the store with bindActionCreators to to
// the connected component
function mapDispatchToProps(dispatch){
  return bindActionCreators(messageActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App));
