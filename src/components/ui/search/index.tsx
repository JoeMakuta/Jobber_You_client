import { Button } from "../global/button";
import Input from "../global/input";

const SearchBar = () => {
  return (
    <div className=" focus:ring-indigo-300 dark:border-white/40 focus:border-[2px] flex justify-center items-center gap-2 border-[1px] border-black p-3 rounded-lg ">
      <Input
        type="text"
        className={"border-none focus:ring-0 shadow-none"}
        label=""
        placeholder="Search"
      />
      <Button label="Search" intent={"primary"} />
    </div>
  );
};

export default SearchBar;
