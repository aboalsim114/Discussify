import React, { useState } from 'react';
import Jitsi from 'react-jitsi';
import Navlogged from './Navlogged';

export default function CreateRoom() {
  const [displayName, setDisplayName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [password, setPassword] = useState('');
  const [onCall, setOnCall] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setOnCall(true);
  };

  return onCall ? (
    <Jitsi
      roomName={roomName}
      displayName={displayName}
      password={password}
      onAPILoad={JitsiMeetAPI => console.log('Good Morning everyone!')}
    />
  ) : (
    <>
      <Navlogged />
      <div className="container">
        <h1>Créer une chambre</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="display-name">Afficher un nom:</label>
            <input
              type="text"
              className="form-control"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="room-name">Nom de la salle:</label>
            <input
              type="text"
              className="form-control"
              value={roomName}
              onChange={e => setRoomName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" name='submit' className="btn btn-primary">
            Créer une chambre
          </button>
        </form>
      </div>
    </>
  );
}
