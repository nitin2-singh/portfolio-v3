import ActionBar from "@/components/action-bar/action-bar";
import Footer from "@/components/footer/footer";
import MainScreen from "@/components/main-screen/main-screen";
import SearchPopup from "@/components/search/search-popup";
import { TopBar } from "@/components/top-bar/top-bar";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <TopBar />
      <SearchPopup />
      <ActionBar />
      <MainScreen />
      <Footer />
    </div>
  );
}
