import React,{useState} from 'react';
import "./UserInput.css";
  
const UserInput = ({addUser}) => {
    const [input, setInput] = useState ({
        name:"",
        email:"",
        phone:"",
        image:"",
        address:"",

    });


    const handleChange= (e)=> {
        const { name,value }= e.target;

        setInput((currValue) =>{
            return{
                ...currValue,
                [name] :value
            }
    })
    };
    console.log("input", input);   
//step end
    const handleAdd = (e)=>{
       e.preventDefault(); //its function call for (not refresh  data) without this function can refresh.
        addUser(input);
        setInput({
            name:"",
            email:"",
            phone:"",
            image:"",
            address:"",

        });
    };
  return (
      <form className="inputForm">
      <input 
      type="text"
       name="name"
        placeholder="Name" 
         onChange={handleChange}
         value={input.name}
        />

        <br/>

        <input 
       name="email"
       type="email"
        placeholder="Email" 
         onChange={handleChange}
         value={input.email}
        />
        
        <br/>

        <input 
       name="phone"
       type="number"
        placeholder="Phone Number" 
         onChange={handleChange}
         value={input.phone}
        />
        
         <br/>

        <input 
       name="image"
       type="url"
        placeholder="Image URL" 
         onChange={handleChange}
         value={input.image}
        />   
 <br/>
<textarea
       name="address"
       row={4}
        placeholder="Address" 
         onChange={handleChange}
         value={input.address}
        /> 
        <br/>
        <button onClick={handleAdd} > Add User</button>
      </form>

  );
};

export default UserInput;






// my ptactise

