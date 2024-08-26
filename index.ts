import React from 'react';

// Step 1: Define the Props interface
interface GreetingProps {
  name: string;
}

// Step 2: Apply the Props type to the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>
  Hello, {name}!
  </div>;
};

export default Greeting;



import React, { Component } from 'react';

// Step 1: Define the State interface
interface CounterState {
  count: number;
}

// If you have props, you would define them as well
// interface CounterProps {}

class Counter extends Component<{}, CounterState> {
  // Initialize the state with the type
  state: CounterState = {
    count: 0
  };

  // Method to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div>
    );
  }
}

export default Counter;

