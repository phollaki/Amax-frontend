import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";
function Header() {
  const router = useRouter();
  const logoutHandler = (e) => {
    localStorage.removeItem("token");
    router.push("/signIn");
  };
  return (
    <div className="h-14 bg-[#131921] flex items-center justify-center px-5">
      <img
        src="./amaxwhite.png"
        className="h-[29px] mx-5 pt-1 cursor-pointer"
        onClick={() => router.push("/")}
      />
      <div className="cursor-pointer hover:border hover:border-white px-2 hidden md:block ">
        <p className="text-[13px] text-gray-400 ml-6 -mb-1 pt-1">Deliver to</p>
        <div className="text-white">
          <LocationOnIcon className="mb-2" />
          <span>Hungary</span>
        </div>
      </div>
      <div className="mx-auto w-[20rem] lg:w-[50rem] h-10 flex ">
        <button className="bg-gray-300 w-[10%] h-full rounded-l-md">All</button>
        <input type="text" className="w-[80%] h-full" />
        <div className="bg-yellow-200 h-full rounded-r-md flex items-center justify-center cursor-pointer w-[3rem]">
          <SearchIcon className="h-10" />
        </div>
      </div>
      <div className="flex items-center py-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Hungary.png"
          alt=""
          className="h-4"
        />
        <div
          className="hover:border hover:border-white cursor-pointer px-4 hidden md:block"
          onClick={() => router.push("/signIn")}
        >
          <p className="text-gray-400 text-[13px]">Hello, Sign in</p>
          <h2 className="text-white">Account & Lists</h2>
        </div>
        <div className="hover:border hover:border-white cursor-pointer px-4">
          <p className="text-gray-400 text-[13px]">Returns</p>
          <h2 className="text-white">& Orders</h2>
        </div>
        <div className="hover:border hover:border-white cursor-pointer px-4">
          <ShoppingCartIcon className="h-[3rem] text-white" />
        </div>
        <div
          onClick={logoutHandler}
          className="hover:border hover:border-white cursor-pointer px-4"
        >
          <LogoutIcon className="h-[3rem] text-white" />
        </div>
      </div>
    </div>
  );
}

export default Header;
