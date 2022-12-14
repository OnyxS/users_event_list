import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
  const [success, setSuccess] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [invites, setInvites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((error) => {
        console.warn(error);
        alert('fetch error');
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickRepost = () => setSuccess(true);

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };
  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          onClickRepost={onClickRepost}
          invites={invites}
          onClickInvite={onClickInvite}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          items={users}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default App;
