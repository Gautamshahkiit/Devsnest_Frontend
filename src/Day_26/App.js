import './App.css';

import {incNumber,decNumber,userName,userEmail} from './actions'
import { useDispatch,useSelector} from 'react-redux';

function App() {
  const count = useSelector((state)=>state.counter);
  const user = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h1>Steps</h1>
        <ul>
          <li>Create a user state using redux</li>
          <li>Update user state when input is changed</li>
          <li>Create a seperate component and display user data(Don't Pass it as Props)</li>
        </ul>
      </div>

      <div>
        <h1>Input</h1>
        <input type="text" placeholder="Name"  onChange={(event)=>{
          dispatch(userName(event.target.value));
        }}></input><br></br>
        <input type="text" placeholder="Email" onChange={(event) =>{
          dispatch(userEmail(event.target.value));
        }}></input>
      </div>

      <div>
        <h1>Data</h1>
        <p>Username: {user.name} </p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}

export default App;
