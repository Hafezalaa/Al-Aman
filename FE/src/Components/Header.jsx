import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { useContext } from "react";
import {UserDataContext} from "../Context/MyContext";

const Header = () => {
  const [logged, setLogged, user] = useContext(UserDataContext);

  

  return (
    <div className="hidden md:flex flex-col">
      <div className="h-[2rem] bg-[#FFF8E1] text-center">
        <ReactTyped
          className="text-xl text-[#64544e]"
          strings={[
            "Hallo und herzlich Willkommen",
            "Unser Laden ist Mo-Sa von 08:00 bis 21:30 Uhr für Euch geöffnet",
            "Handy: 0123456789 oder Email: email@email.email",
          ]}
          typeSpeed={100}
          backSpeed={80}
          backDelay={500}
          loop
        ></ReactTyped>
      </div>
      <div className="h-[8rem] bg-[#A5D6A7] flex place items-center pl-[15%] ">
        <nav className="w-[50%] mr-10 mx-4">
          <ul className="flex place-content-between">
            <NavLink>A</NavLink>
            <NavLink>A</NavLink>
            <NavLink>A</NavLink>
            <NavLink>A</NavLink>
          </ul>
        </nav>
        {!logged? <form
          action=""
          method="post"
          className=" w-[40%] h-[6rem] grid grid-cols-2 grid-rows-2"
        >
          <input
            className=" mt-1 w-[90%] ml-2 mb-2"
            type="text"
            placeholder="Enter your email or username"
          />

          <input
            className=" mt-1 w-[90%] ml-2 mb-2"
            type="text"
            placeholder="Enter your password"
          />
          <button className="m-1 ml-10 w-[60%]  bg-[#1621b3da] text-white ">
            Submit
          </button>
          <button className="m-1 w-[80%] text-[#1621b3da]">
            Register Here!
          </button>
        </form>:
        <div className="w-[25%] flex place-content-between m-auto">
            <p>Hello {user.username}</p>
            <button className=" bg-[#7e86f5da] text-red-500 ">Log Out</button>
          </div>}
      </div>
      <div className="h-5 bg-[#FFF8E1] "></div>
      <div className="h-3 bg-[#FF6F61]  "></div>
      <div>
        <img className="w-[150px] fixed top-[5px]" src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
