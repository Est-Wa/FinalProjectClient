import React, { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import EditIcon from '@mui/icons-material/Edit';
import { Container, IconButton, ListItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useEffect } from 'react';

const handleSaveInfo = async (e, info, kind) => {
  const params = kind == 'first_name' ? { first_name: info } : kind == 'last_name' ? {} : {};
  const res = await axios.put('http://localhost:3600/users', params, {
    headers: {
      'authorization': `Bearer ${localStorage.getItem('token')}`,
      'content-type': 'application/json'
    }
  });
}
const PersonalInformation = () => {
  const [open, setOpen] = useState(true);
  const [editFirstName, setEditFirstName] = useState(true);
  const [editLastName, setEditLastName] = useState(true);
  const [editEmail, setEditEmail] = useState(true);
  const [editPhone1, setEditPhone1] = useState(true);
  const [editphone2, setEditPhone2] = useState(true);

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [user_name, setUser_name] = useState("");
  const [phone_number1, setPhone_number1] = useState("");
  const [phone_number2, setPhone_number2] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  async function fetchPersonalInformation() {
    const res = await axios.get('http://localhost:3600/users', {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
        'content-type': 'application/json'
      }
    });

    const { first_name, last_name, user_name, phone_number1, phone_number2, address, email } = res.data;
    return { first_name, last_name, user_name, phone_number1, phone_number2, address, email };
  }
  useEffect(() => {
    const fun = async () => {
      const { first_name, last_name, user_name, phone_number1, phone_number2, address, email } = await fetchPersonalInformation();

      setFirst_name(first_name);
      setLast_name(last_name);
      setUser_name(user_name);
      setPhone_number1(phone_number1);
      setPhone_number2(phone_number2);
      setAddress(address);
      setEmail(email);
    };
    fun();
  }, [])

  useEffect(() => { console.log(first_name) }, [first_name])


  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            פרטים אישיים
          </ListSubheader>
        }
      >
        <ListItem >
          <TextField
            disabled={editFirstName}
            id="filled-disabled"
            label="First Name"
            defaultValue={first_name}
            value={first_name}
            variant="filled"
            onChange={(e) => { setFirst_name(e.target.value) }}
          />
          {editFirstName && <IconButton onClick={(e) => setEditFirstName(false)}>
            < EditIcon />
          </IconButton>}
          {!editFirstName && <IconButton onClick={(e) => { console.log("ertyui" + first_name); handleSaveInfo(e, first_name, "first_name"); setEditFirstName(true) }}>
            < CheckIcon />
          </IconButton>}
          {!editFirstName && <IconButton onClick={(e) => setEditFirstName(true)}>
            < CloseIcon />
          </IconButton>}
        </ListItem>
        <ListItem >

          <TextField
            disabled={editLastName}
            id="filled-disabled"
            label="Last Name"
            defaultValue={last_name}
            value={last_name}
            variant="filled"
            onChange={(e, val) => { setLast_name(val) }}
          />
          <IconButton onClick={(e) => setEditLastName(!editLastName)}>
            < EditIcon />
          </IconButton>
        </ListItem>
        <ListItem >

          <TextField
            disabled={editEmail}
            id="filled-disabled"
            label="Email Address"
            defaultValue={email}
            value={email}
            variant="filled"
            onChange={(e, val) => { setEmail(val) }}
          />
          <IconButton onClick={(e) => setEditEmail(!editEmail)}>
            < EditIcon />
          </IconButton>
        </ListItem>
        <ListItem >

          <TextField
            disabled={editPhone1}
            id="filled-disabled"
            label="name"
            defaultValue=""
            variant="filled"
          />
          <IconButton onClick={(e) => setEditPhone1(!editPhone1)}>
            < EditIcon />
          </IconButton>
        </ListItem>
        <ListItem id="item1">

          <TextField
            disabled={editphone2}
            id="filled-disabled"
            label="name"
            defaultValue=""
            variant="filled"
          />
          <IconButton onClick={(e) => setEditPhone2(!editphone2)}>
            < EditIcon />
          </IconButton>
        </ListItem>

          
      </List>
    </Container>
  )
}

export default PersonalInformation
