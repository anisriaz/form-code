import {useState} from 'react';
function App (){
let [counter, setCounter ]= useState (1);

const increment = () => {
   setCounter (counter + 1);
}
const decrement = () => {setCounter(counter > 1 ? counter - 1 : 0)};

    

return (
<div>
<h1>Event handling</h1>
<button onClick={increment}>Increment</button>
<span> counter = {counter}</span>
<button onClick={decrement}>Deccrement</button>
</div>

)

}
export default App;