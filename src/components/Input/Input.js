import React, { Component } from 'react';

class Input extends Component {

  render() {
    return (
      <form action="" >
        <input type="text" placeholder="Enter point coords..." onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();

                this.props.add(e.target.value.trim().split(' ').map(item => parseFloat(item)));
                e.target.value = '';
              }
            }
          }
          />
      </form>
    )
  }
}

export default Input;