import { Files } from "./files";
import { LeftDeck } from "./left-deck";

export default function MainScreen() {
  return (
    <div className="flex w-full flex-1">
      <div className="w-75 flex h-full">
        <LeftDeck />
        <Files />
      </div>

      <div className="w-full h-full">
        <p>Right</p>
      </div>
    </div>
  );
}
