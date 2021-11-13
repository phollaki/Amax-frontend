import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
function Sidebar() {
  return (
    <div className=" w-full p-8">
      <div>
        <h1 className="text-md font-semibold">Customer Reviews</h1>
        <ul className="text-[#ffa41c]">
          <li>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />& Up
          </li>
          <li>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />& Up
          </li>
          <li>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
            <StarBorderIcon />& Up
          </li>
          <li>
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />& Up
          </li>
          <li>
            <StarIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />& Up
          </li>
        </ul>
      </div>
      <div>
        <h1 className="mt-5 text-md font-semibold">Price</h1>
        <ul>
          <li>Up to $25</li>
          <li>$25 to $50</li>
          <li>$50 to $100</li>
          <li>$100 to $200</li>
          <li>$200 & above</li>
        </ul>
      </div>
      <div>
        <h1 className="mt-5 text-md font-semibold">Type</h1>
        <ul className="ml-5">
          <li>Football</li>
          <li>Tennis</li>
          <li>Squash</li>
          <li>Talking</li>
          <li>Golf</li>
          <li>Board games</li>
          <li>Costume party</li>
          <li>Basketball</li>
          <li>Camping</li>
          <li>Cycling</li>
          <li>Fishing</li>
          <li>Drawing</li>
          <li>Painting</li>
          <li>Dance</li>
          <li>Running</li>
          <li>Volleyball</li>
          <li>Video games</li>
          <li>Ping-pong</li>
        </ul>
      </div>
      <div>
        <h1 className="mt-5 text-md font-semibold">Color</h1>
        <div className="flex space-x-3 h-[5rem] flex-wrap cursor-pointer mt-5">
          <div className="h-7 w-7 rounded-full bg-black"></div>
          <div className="h-7 w-7 rounded-full bg-[white]"></div>
          <div className="h-7 w-7 rounded-full bg-[red]"></div>
          <div className="h-7 w-7 rounded-full bg-[yellow]"></div>
          <div className="h-7 w-7 rounded-full bg-[cyan]"></div>
          <div className="h-7 w-7 rounded-full bg-[orange]"></div>
          <div className="h-7 w-7 rounded-full bg-[green]"></div>
          <div className="h-7 w-7 rounded-full bg-[gray]"></div>
          <div className="h-7 w-7 rounded-full bg-[darkblue]"></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
