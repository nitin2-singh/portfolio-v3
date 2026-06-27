"use client";

import { useEffect, useRef } from "react";
import { useFileStore } from "@/store/files.store";
import HomeFile from "../files-content/home";
import FileTabs from "./file-tabs";
import { Files } from "./files";
import { LeftDeck } from "./left-deck";
import AboutSection from "../files-content/about-html";
import ProjectsSection from "../files-content/project-js";
import SkillsSection from "../files-content/skills-json";
import ExperienceSection from "../files-content/experience-ts";
import ContactPage from "../files-content/contact-css";
import ReadmePage from "../files-content/readme";
import { Terminal } from "./terminal";
import { useTerminalStore } from "@/store/terminal.store";
import { useLeftDeckStore } from "@/store/left-deck.store";

export default function MainScreen() {
  const { setOpenDeck, openDeck } = useLeftDeckStore();
  const { activeFile } = useFileStore();
  const { openTerminal } = useTerminalStore();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [activeFile?.id]);

  return (
    <div className="flex w-full h-full flex-1 overflow-hidden">
      <div className="flex h-full shrink-0 max-lg:hidden">
        <LeftDeck onFolderClick={() => setOpenDeck(!openDeck)} />

        {/* animated files panel */}
        <div
          className="h-full overflow-hidden transition-all duration-300 ease-in-out border-r border-stone-700"
          style={{ width: openDeck ? "220px" : "0px" }}
        >
          <div className="w-55 h-full">
            <Files />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 min-w-0 h-full">
        <FileTabs />
        <div
          ref={containerRef}
          className="flex-1 overflow-auto bg-brand-mainscreenaccent"
        >
          {activeFile.id === 1 && <HomeFile />}
          {activeFile.id === 2 && <AboutSection />}
          {activeFile.id === 3 && <ProjectsSection />}
          {activeFile.id === 4 && <SkillsSection />}
          {activeFile.id === 5 && <ExperienceSection />}
          {activeFile.id === 6 && <ContactPage />}
          {activeFile.id === 7 && <ReadmePage />}
        </div>
        {openTerminal && <Terminal />}
      </div>
    </div>
  );
}
