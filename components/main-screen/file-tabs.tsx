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
    <div>
      <div className="flex w-full items-center gap-2 border-b border-gray-300 bg-gray-100">
        <div className="flex items-center">
          {files.map((file) => (
            <div
              key={file.id}
              className="font-medium text-gray-700 flex items-center gap-2 text-[11px] border-r border-r-gray-300 border-t-2 border-yellow-400 px-3 py-1"
            >
              <Image
                width={16}
                height={16}
                src={file.logo}
                alt={file.name}
                className="w-4 h-4"
              />
              {file.name}
              <Button
                variant="ghost"
                className="hover:bg-gray-200 p-1! h-fit rounded-sm"
              >
                <X size={6} className="size-2.5" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      <p className="flex text-[11px] items-center gap-1 border-b border-gray-300 px-3 py-1 text-gray-500">
        nitin <ChevronRight size={10} /> src <ChevronRight size={10} /> home.tsx
      </p>
    </div>
  );
}
