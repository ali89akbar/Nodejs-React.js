import { useEffect, useState } from "react"

const Update = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [select, setSelect] = useState(null);

    function get() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:3060/getuser", requestOptions)
            .then(response => response.json())
            .then(result => setUsers(result))
            .catch(error => setError(error));
    }
    function fetchUser() {
      if (!select) {
          return;
      }
  
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
          name: select.name,
          email: select.email,
          phone: select.phone
      });
  
      var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
      };
  
      fetch(`http://localhost:3060/updateuser/${select.index}`, requestOptions)
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((data) => setUsers(users.map((user) => (user.index === select.index ? data : user))))
          .catch((error) => setError(error));
  }

    useEffect(() => {
        get();
    }, []);

    return (
        <div>
          <ul>
            {users.map((user) => 
                <ul key={user.index}>
                    <h1>{user.name}</h1>
                    <button onClick={() => setSelect(user)}>Edit</button>
                </ul>
            )}
            </ul>
            <p>{error && error.message}</p>
            {select && (
                <>
                    <input value={select.name} onChange={(e) => setSelect({ ...select, name: e.target.value })} />
                    <button onClick={fetchUser}>Update</button>

                </>
            )}
        </div>
    );
}

export default Update;
