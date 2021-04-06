import { Link } from "react-router-dom";

const linkClass =
  "inline-flex items-center justify-center p-2 rounded-md  hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white m-2 shadow";

function NavBar() {
  return (
    <div className="flex shadow-lg">
      <nav>
        <ul className="flex gap-2 DarkSkyBlue rounded-r-lg pl-5 pr-5  max-w-full">
          <li>
            <Link className={linkClass} to="./CubeTurn">
              Cube Turn
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
