import Search from "../components/Search";

export default function Dashboard() {
  return (
    <>
      <div className="hero-container w-[630px] text-5xl mt-25 mb-10 mx-auto text-center leading-tight font-bold ">
        <h2 className="text-(--btn-black) tracking-wider">Lost Something ?</h2>
        <h2 className="text-(--orange) tracking-wider">Or Found Something ?</h2>
        <h4 className="text-base my-1.5 text-(--navbar-border)">
          Post it Here. Help Others. Get it Back.
        </h4>
      </div>

      <div className="absolute icon w-full h-[50px] top-[140px] left-[100px]">
        <div class="absolute w-28 h-16 rounded-md shadow-sm bg-[#F1D9B3] rotate-[-30deg]">
          <span class="absolute w-3 h-3 rounded-full bg-[#F6F1E4] border border-[#25201B]/10"></span>
          <div class="h-full flex items-center justify-center border-l-2 border-dashed border-[#C2872E]">
            <span class="text-xs font-semibold tracking-wide text-[#8A4B12]">
              LOST
            </span>
          </div>
        </div>

        <div class="absolute w-28 h-16 rounded-md shadow-sm bg-[#CFE3DD] rotate-[-30deg] right-[330px]">
          <span class="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F6F1E4] border border-[#25201B]/10"></span>
          <div class="h-full flex items-center justify-center border-l-2 border-dashed border-[#2F6F62]">
            <span class="text-xs font-semibold tracking-wide text-[#1F4B41]">
              FOUND
            </span>
          </div>
        </div>
      </div>

      <div className="lost-found-container max-w-[800px] h-[230px] mx-auto flex justify-between items-center gap-10 p-4 mb-10">
        <div className="left bg-(--pure-white) max-w-[50%] w-[50%] p-2.5 h-full flex flex-col items-start rounded-2xl">

          <h3 className="text-(--btn-black) self-center font-bold text-xl mt-2.5">
            Report Lost Item
          </h3>
          <h4 className="text-(--navbar-border) text-base my-1.5 self-center min-h-[50px]">
            Tell us what you lost and where it was lost.
          </h4>
          <button className="post-lost bg-(--green) text-(--pure-white) p-1.5 rounded-lg m-1 cursor-pointer transition-all duration-150 ease-in-out active:scale-95 mt-2 self-center w-[80%] hover:bg-(--green-hover) font-bold">
            Post Lost Item
          </button>
        </div>
        <div className="p-2.5 right bg-(--pure-white) max-w-[50%] w-[50%] h-full flex flex-col items-start rounded-2xl">

          <h3 className="text-(--btn-black) self-center font-bold text-xl mt-2.5">
            Report Found Item
          </h3>
          <h4 className="text-(--navbar-border) text-base my-1.5 self-center text-center">
            Help the owner by posting the found item details.
          </h4>
          <button className="post-found bg-(--orange) text-(--pure-white) p-1.5 rounded-lg m-1 cursor-pointer transition-all duration-150 ease-in-out active:scale-95 mt-2 self-center w-[80%] hover:bg-(--orange-hover) font-bold">
            Post Found Item
          </button>
        </div>
      </div>

      <Search />
    </>
  );
}
