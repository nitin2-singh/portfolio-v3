"use client";

import { useFileStore } from "@/store/files.store";
import HomeFile from "../files-content/home";
import FileTabs from "./file-tabs";
import { Files } from "./files";
import { LeftDeck } from "./left-deck";
import { useState } from "react";
import AboutSection from "../files-content/about-html";
import ProjectsSection from "../files-content/project-js";
import SkillsSection from "../files-content/skills-json";
import ExperienceSection from "../files-content/experience-ts";
import ContactPage from "../files-content/contact-css";
import ReadmePage from "../files-content/readme";

export default function MainScreen() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { activeFile } = useFileStore();
  return (
    <div className="flex w-full h-full flex-1 overflow-hidden">
      <div className="flex h-full shrink-0 max-lg:hidden">
        <LeftDeck onFolderClick={() => setSidebarOpen((o) => !o)} />

        {/* animated files panel */}
        <div
          className="h-full overflow-hidden transition-all duration-300 ease-in-out border-r border-stone-700"
          style={{ width: sidebarOpen ? "220px" : "0px" }}
        >
          <div className="w-55 h-full">
            <Files />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 min-w-0 h-full">
        <FileTabs />
        <div className="flex-1 overflow-auto bg-brand-mainscreenaccent">
          {activeFile.id === 1 && <HomeFile />}
          {activeFile.id === 2 && <AboutSection />}
          {activeFile.id === 3 && <ProjectsSection />}
          {activeFile.id === 4 && <SkillsSection />}
          {activeFile.id === 5 && <ExperienceSection />}
          {activeFile.id === 6 && <ContactPage />}
          {activeFile.id === 7 && <ReadmePage />}
        </div>
      </div>
    </div>
  );
}
