import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="./Home">Home on the range</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
