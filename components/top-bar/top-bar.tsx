import { SearchBar } from "../search/search-bar";
import { Controls } from "./controls";

export function TopBar() {
  return (
    <div className="flex items-center px-4 border-b py-1.5 w-full">
      <Controls />
      <div className="w-full flex justify-center">
        <SearchBar />
      </div>
    </div>
  );
}
