import ActionBar from "@/components/action-bar/action-bar";
import SearchPopup from "@/components/search/search-popup";
import { TopBar } from "@/components/top-bar/top-bar";

export default function Home() {
  return (
    <div>
      <TopBar />
      <SearchPopup />
      <ActionBar />
    </div>
  );
}
