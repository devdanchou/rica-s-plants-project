import { useContext } from "react";
import SessionContext from "contexts/SessionContext";

const NavBar = () => {
  const { username } = useContext(SessionContext);

  console.log(username);
  return (
    <nav className="flex justify-center bg-emerald-800 font-lato">
      <div className="flex items-center justify-between w-full max-w-5xl px-8 py-2">
        <div className="flex flex-col items-center text-2xl text-white font-playfair">
          <img
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
            className="w-10"
          />
          Rica's Plants
        </div>
        <div>
          <button className="flex items-center text-emerald-200">
            <i className="fa-solid fa-user mr-2 text-xl"></i>
            {username}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
