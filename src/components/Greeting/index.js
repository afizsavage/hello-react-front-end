import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { getMessagesAction, getMessageSuccessAction } from '../../redux/greet';

const Greeting = () => {
  const state = useSelector((state) => state.greetReducer);
  const dispatch = useDispatch();

  console.log(state);

  const getMessage = () => {
    dispatch(getMessagesAction());
    fetch('http://127.0.0.1:3000/v1/greeting.json')
      .then((response) => response.json())
      .then((data) => dispatch(getMessageSuccessAction(data.message)))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button type="button" onClick={() => getMessage()}>
        Get Message
      </button>
      {state.message && <span>{state.message}</span>}
    </div>
  );
};

export default Greeting;
