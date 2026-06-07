import { SearchBar } from "../search/search-bar";
import { Controls } from "./controls";
import { ProjectListSheet } from "./project-list-sheet";

export function TopBar() {
  return (
    <div className="flex items-center px-4 border-b py-1 w-full bg-brand-topbar max-lg:bg-brand-filesdeck">
      <Controls />
      <div className="w-full flex justify-center max-lg:hidden">
        <SearchBar />
      </div>
      <ProjectListSheet />
    </div>
  );
}
