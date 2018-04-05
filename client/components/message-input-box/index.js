import React, { Component } from 'react';

class MessageInputBox extends Component {
  handleKeyPress = (e) => {
    if(e.which === 13){
      this.props.onSubmit();
      e.preventDefault()
    }
  }
  handleChange = (e) => {
    this.props.onChange(e.target.value)
  }
  render(){
    return (
      <div className='message-entry-box'>
        <textarea
          name='message'
          value={this.props.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}/>
      </div>
      )
  }
}

export default MessageInputBox;
