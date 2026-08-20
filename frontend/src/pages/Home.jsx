import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Global Trust Fund</h1>

      <p>
        Secure digital banking platform.
      </p>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>
    </div>
  );
}

export default Home; and 