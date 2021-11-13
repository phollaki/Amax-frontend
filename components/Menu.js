function Menu() {
  return (
    <div className="h-10 bg-[#232f3e] flex items-center text-white justify-between px-5">
      <div>
        <button className="hover:border-2 hover:border-white p-1 mr-2">
          All
        </button>
        <button className="hover:border-2 hover:border-white p-1 mr-2">
          Today's Deals
        </button>
        <button className="hover:border-2 hover:border-white p-1 mr-2">
          Customer Service
        </button>
        <button className="hover:border-2 hover:border-white p-1 mr-2">
          Registry
        </button>
        <button className="hover:border-2 hover:border-white p-1 mr-2">
          Gift Cards
        </button>
        <button className="hover:border-2 hover:border-white p-1">Sell</button>
      </div>
      <div className="hover:border-2 hover:border-white p-1">
        Shop early Black Friday deals!
      </div>
    </div>
  );
}

export default Menu;
