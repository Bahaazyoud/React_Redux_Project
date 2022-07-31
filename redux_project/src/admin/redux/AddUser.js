import React, { useState } from 'react'
 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';


const AddUser = () => {

  let nav = useNavigate();
  let dispatch = useDispatch();


  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    image:"",
    password:""
  });
  const [error, setError] = useState("");

  const { name, email, phone,image ,password} = state;

  const handdleInput = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }


  const handdleSubmit = (e) => {
    e.preventDefault();
     

      dispatch(addUser(state));
      nav('/Users');
      

    



    

  }
  return (
    <div>
      <h2 align='center'> Add User </h2>
      {error && <h3 style={{ color: 'red' }}> </h3>}

      {/* <Box m='auto' display="flex" component="form" onSubmit={handdleSubmit} sx={{ '& > :not(style)': { m: 1, width: '45ch' } }} noValidate autoComplete="off">
        <TextField id="outlined-basic" name='name' label="Name" variant="outlined" value={name} type='text' onChange={handdleInput} /><br />

        <TextField id="outlined-basic" label="Email" name='email' variant="outlined" value={email} type='text' onChange={handdleInput} /><br />

        <TextField id="outlined-basic" label="Address" name='address' variant="outlined" value={phone} type='text' onChange={handdleInput} /><br />

        <Button variant='contained' color="primary" type='submit'> Add User </Button>
        <Button variant='contained' color="primary" onClick={() => { nav('/Users') }}> Go Back </Button>


      </Box> */}


    </div>


  )
}

export default AddUser