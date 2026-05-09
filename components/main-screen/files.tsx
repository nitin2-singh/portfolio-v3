import { ArrowUp, Plus } from "lucide-react";
import Image from "next/image";
import { PiGitMergeLight } from "react-icons/pi";
export function Files() {
  const files = [
    {
      id: 1,
      name: "home.tsx",
      logo: "https://dl.svgcdn.com/svg/logos/react.svg",
      location: "src/",
    },
    {
      id: 2,
      name: "about.html",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_html.svg",
      location: "src/",
    },
    {
      id: 3,
      name: "projects.js",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_js.svg",
      location: "src/",
    },
    {
      id: 4,
      name: "skills.json",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_json.svg",
      location: "src/",
    },
    {
      id: 5,
      name: "experience.ts",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_typescript.svg",
      location: "src/",
    },
    {
      id: 6,
      name: "contact.css",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_css.svg",
      location: "src/",
    },
    {
      id: 7,
      name: "README.md",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_markdown.svg",
      location: "./",
    },
    {
      id: 8,
      name: "Resume.pdf",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_pdf.svg",
      location: "./",
      isFile: true,
    },
  ];
  return (
    <div className="bg-gray-400 w-full h-full flex flex-col justify-between">
      <div>
        <p className="text-xs p-2 px-3">PORTFOLIO</p>
        {files.map((file) => (
          <div
            key={file.id}
            className="flex  items-center gap-2 px-3 py-1.5 hover:bg-gray-500 border-l-2 hover:border-blue-500 border-transparent cursor-pointer text-xs"
          >
            <Image width={16} height={16} src={file.logo} alt={file.name} />
            <p className="mx-auto">{file.name}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-3 py-1 border-t">
        <div className="flex items-center gap-1 text-xs">
          <PiGitMergeLight size={12} />
          <p>main</p>
        </div>
        <div className="flex gap-3 text-xs">
          <div className="flex items-center text-xs text-green-400">
            <ArrowUp size={12} />
            {"1"}
          </div>
          <div className="flex items-center text-xs text-red-400">
            <Plus size={12} />
            {"3"}
          </div>
        </div>
      </div>
    </div>
  );
}
