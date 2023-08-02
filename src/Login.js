import React, { useState } from 'react';

const userCredentials = [
    {
      "Username": "adam",
      "Password": "member123"
    },
    {
      "Username": "fauzi",
      "Password": "member123"
    },
    {
        "Username": "hilmi",
        "Password": "member123"
      },
      {
        "Username": "haidar",
        "Password": "member123"
      },
      {
        "Username": "luqman",
        "Password": "member123"
      },
      {
        "Username": "misbah",
        "Password": "member123"
      },
      {
        "Username": "nabil",
        "Password": "member123"
      },
      {
        "Username": "ummar",
        "Password": "member123"
      },
      {
        "Username": "zahid",
        "Password": "member123"
      },
      {
        "Username": "zaky",
        "Password": "member123"
      }
  ];
  

function Login({ onSuccessLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Cek apakah data username dan password sesuai dengan data JSON
    const user = userCredentials.find(cred => cred.Username === username && cred.Password === password);

    if (user) {
      // Jika data cocok, panggil onSuccessLogin untuk mengalihkan navigasi ke halaman utama
      onSuccessLogin();
    } else {
      // Jika data tidak cocok, tampilkan pesan kesalahan
      setError('Username atau password salah! jangan-jangan anda bukan golongan kami🤨');
    }
  };

  return (
    <div>
      <h1>Halaman Login</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
