import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// React component
class Counter extends React.Component {
  render(){
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

// Action:
const increaseAction = {type: 'increase'};

// Reducer:
function counter(state={count: 0}, action) {
  let count = state.count;
  switch(action.type){
    case 'increase':
      return {count: count+1};
    default:
      return state;
  }
}

// Store:
let store = createStore(counter);


// Connected Component:
function mapStateToProps(state)  {
  // Map Redux state to component props
  return {
    value: state.count
  };
}
function mapDispatchToProps(dispatch) {
  // Map Redux actions to component props
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
}
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);
