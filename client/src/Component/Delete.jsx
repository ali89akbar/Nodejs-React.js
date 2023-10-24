import { useEffect, useState } from "react"

const Delete = () => {
  const [del, setDel] = useState({ name: '', mail: '', phone: '' });
  const [msg, setMsg] = useState('');    

  const handleDelete = (a) => {
    const {name,mail,phone}= del
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      // You can add parameters to the URL if needed
      // For example: `fetch("http://localhost:3060/deleteuser/1?name=" + del.name + "&mail=" + del.mail + "&phone=" + del.phone, requestOptions)`
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3060/deleteuser/${a}`, requestOptions)
      .then(response => response.text())
      .then(result => setMsg(result))
      .catch(error => console.error('error', error));
  }
    
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
      <p>{msg}</p>
    </div>
  )
}

export default Delete;
