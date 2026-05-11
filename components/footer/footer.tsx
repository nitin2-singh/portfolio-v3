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
    <div className="bg-brand-primary rounded-t-xs px-4 py-0.5 flex justify-between h-6">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          className="text-xs h-fit rounded-sm hover:bg-stone-100/20 w-fit px-1 py-0.5"
        >
          <TriangleAlert size={10} className="size-2.5" />0
        </Button>
        <Button
          variant="ghost"
          className="text-xs h-fit rounded-sm hover:bg-stone-100/20 w-fit px-1 py-0.5 max-sm:hidden"
        >
          ⎇ main
        </Button>
        <Button
          variant="ghost"
          className="text-xs h-fit rounded-sm hover:bg-stone-100/20 w-fit px-1 py-0.5 max-md:hidden"
        >
          <RefreshCcw size={10} className="size-2.5" /> nitin&apos;s porfolio
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          className="text-xs h-fit rounded-sm hover:bg-stone-100/20 w-fit px-1 py-0.5 max-sm:hidden"
        >
          Typescript React
        </Button>
        <ThemeDropdown />
        <Button
          variant="ghost"
          className="text-xs h-fit rounded-sm hover:bg-stone-100/20 w-fit px-1 py-0.5"
        >
          {time}
        </Button>
      </div>
    </div>
  );
}
