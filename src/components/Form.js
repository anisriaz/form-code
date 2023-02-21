import {useState} from 'react';
function App() {
  let [User, setUser ] = useState({
  Username: "",
  password: "",
  number: "",
  email: ""
  });
  
  const handleChange = ({target: {name, value}}) => setUser({...User, [name]: value});
  return (
    <div>
   Username : <input type = "text" name="username" value={User.name} onChange={handleChange}/> 
   Password : <input type = "password" name="password"  value={User.password} onChange={handleChange}/> 
   Ph No : <input type = "number" name="number"  value={User.number} onChange={handleChange} />
   Email : <input type = "Email" name="email"  value={User.email} onChange={handleChange} />
 
   </div>
   
  );
}

export default App;