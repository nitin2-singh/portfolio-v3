import { ChevronRight, X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function FileTabs() {
  const files = [
    {
      id: 1,
      name: "File1.txt",
      logo: "https://dl.svgcdn.com/svg/logos/react.svg",
    },
    {
      id: 2,
      name: "File2.txt",
      logo: "https://dl.svgcdn.com/svg/logos/react.svg",
    },
  ];
  return (
    <div className="max-md:hidden">
      <div className="flex w-full items-center gap-2 border-b border-border bg-brand-mainscreenfiles">
        <div className="flex items-center">
          {files.map((file) => (
            <div
              key={file.id}
              className="font-medium flex items-center gap-2 text-[11px] border-r border-r-border border-t-2 border-brand-primary px-3 py-1 bg-brand-mainscreenaccent"
            >
              <Image
                width={16}
                height={16}
                src={file.logo}
                alt={file.name}
                className="w-4 h-4"
              />
              {file.name}
              <Button variant="ghost" className="p-1! h-fit rounded-sm">
                <X size={6} className="size-2.5" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      <p className="flex text-[11px] items-center gap-1 border-b border-border px-3 py-1 bg-brand-mainscreenaccent">
        nitin <ChevronRight size={10} /> src <ChevronRight size={10} /> home.tsx
      </p>
    </div>
  );
}
