export default function Navbar() {
  return (
    <>
      <div className="bg-(--navbar)/90 text-(--text-1) nav-container max-w-full w-full h-[70px] fixed z-2 top-0 border-b-1 border-(--navbar-border)/10">
        <nav className="nav max-w-[1600px] h-full p-2 px-4 mx-auto flex justify-between items-center">
          <div className="logo tracking-wider text-2xl font-bold">
            Lost<span className="text-(--orange)">&</span>Found
          </div>
          <ul className="menus flex gap-4 cursor-pointer">
            <li className="h-[40px] text-(--text-1) font-bold rounded-lg flex justify-center items-center transition-all duration-150 ease-in-out active:scale-95 w-[90px]">
              <button className="cursor-pointer border-0 outline-0 py-1 px-3 w-full">
                Log In
              </button>
            </li>
            <li className="h-[40px] text-(--pure-white) bg-(--btn-black) font-bold rounded-lg flex justify-center items-center transition-all duration-150 ease-in active:scale-95 w-[90px]overflow-hidden">
              <button className="cursor-pointer border-0 outline-0 py-1 px-3 w-full">
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
