"use client";
import { RefreshCcw, TriangleAlert } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-stone-400 rounded-t-xs px-4 py-0.5 flex justify-between">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          className="text-xs h-fit rounded-sm hover:bg-stone-600 w-fit px-1 py-0.5"
        >
          <TriangleAlert size={10} className="size-2.5" />0
        </Button>
        <Button
          variant="ghost"
          className="text-xs h-fit rounded-sm hover:bg-stone-600 w-fit px-1 py-0.5"
        >
          ⎇ main
        </Button>
        <Button
          variant="ghost"
          className="text-xs h-fit rounded-sm hover:bg-stone-600 w-fit px-1 py-0.5"
        >
          <RefreshCcw size={10} className="size-2.5" /> nitin&apos;s porfolio
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          className="text-xs h-fit rounded-sm hover:bg-stone-600 w-fit px-1 py-0.5"
        >
          Typescript React
        </Button>
        <ThemeDropdown />
        <Button
          variant="ghost"
          className="text-xs h-fit rounded-sm hover:bg-stone-600 w-fit px-1 py-0.5"
        >
          {time}
        </Button>
      </div>
    </div>
  );
}
