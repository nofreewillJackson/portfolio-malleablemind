import TaskBarComp from "./components/TaskBarComp";
import PaintComp from "./components/PaintComp";
import Desktop from "./components/Desktop";
import StreamingComp from "./components/StreamingComp";
import ArtPrompt from "./components/ArtPrompt";
import ArtsAndCrafts from "./components/ArtsAndCrafts";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Coding from "./components/Coding";
import WindowSizeProvider from "./components/WindowSizeContext";
import RecycleBin from "./components/RecycleBin";
import Credit from "./components/Credit";
import HeroSection from './components/WallpaperOverlay/HeroSection';
import DefinitionSection from './components/WallpaperOverlay/DefinitionSection';
import NavbarComp from "./components/NavbarComp";
import FlashcardApp  from "./components/ExternalComps/FlashcardApp";
import SWECards from "./components/ExternalComps/SWE";

import { useState } from "react";

function App() {
  const [showPaint, toggleShowPaint] = useState(false);
  const [showStreaming, toggleShowStreaming] = useState(false);
  const [showHelp, toggleShowHelp] = useState(false);
  const [showArtsAndCrafts, toggleShowArtsAndCrafts] = useState(false);
  const [showResume, toggleShowResume] = useState(true);
  const [showContact, toggleShowContact] = useState(false);
  const [showCoding, toggleShowCoding] = useState(false);
  const [showRecycleBin, toggleShowRecycleBin] = useState(false);
  const [showCredit, toggleShowCredit] = useState(false);
  const [showFlashcardApp, toggleShowFlashcardApp] = useState(false);
  const [showSWECards, toggleShowSWECards] = useState(false);

  const handleOpenArtsAndCrafts = () => toggleShowArtsAndCrafts(false); // debugg
  const handleOpenPaint = () => toggleShowPaint(true);
  const handleOpenStreaming = () => toggleShowStreaming(false); //debug
  const handleOpenResume = () => toggleShowResume(true);
  const handleOpenContact = () => toggleShowContact(true);
  const handleOpenCoding = () => toggleShowCoding(true);
  const handleOpenRecycleBin = () => toggleShowRecycleBin(true);
  const handleOpenCredit = () => toggleShowCredit(true);
  const handleOpenBlog = () => {
    window.location.href = 'https://www.malleablemind.ai/j-garden/';
  };
  const handleOpenFlashcard = () => toggleShowFlashcardApp(true);
  const handleOpenSWECards = () => toggleShowSWECards(true);
  const handleShowHelp = () => toggleShowHelp(true);
  const handleCloseHelp = () => toggleShowHelp(false);

  return (
      <>
        {/* Pass the state handlers to NavbarComp */}
        <NavbarComp
            openBlog={handleOpenBlog}
            openResume={handleOpenResume}
            openCoding={handleOpenCoding}
            openPaint={handleOpenPaint}
        />

        <WindowSizeProvider>
          <TaskBarComp
              openPaint={handleOpenPaint}
              openStreaming={handleOpenStreaming}
              openArts={handleOpenArtsAndCrafts}
              openResume={handleOpenResume}
              openContact={handleOpenContact}
              openCoding={handleOpenCoding}
              openCredit={handleOpenCredit}
          />
          <Desktop
              openPaint={handleOpenPaint}
              openStreaming={handleOpenStreaming}
              openArts={handleOpenArtsAndCrafts}
              openResume={handleOpenResume}
              openContact={handleOpenContact}
              openCoding={handleOpenCoding}
              openRecycleBin={handleOpenRecycleBin}
              openFlashcardApp={handleOpenFlashcard}
              openSWECards={handleOpenSWECards}
          />
          <PaintComp
              show={showPaint}
              toggle={toggleShowPaint}
              onHelp={handleShowHelp}
          />
          <StreamingComp show={showStreaming} toggle={toggleShowStreaming} />
          <ArtsAndCrafts
              show={showArtsAndCrafts}
              toggle={toggleShowArtsAndCrafts}
          />
          <Resume show={showResume} toggle={toggleShowResume} />
          <Contact show={showContact} toggle={toggleShowContact} />
          <Coding show={showCoding} toggle={toggleShowCoding} />
          <Credit show={showCredit} toggle={toggleShowCredit} />
          <Credit show={showCredit} toggle={toggleShowCredit} />
          <SWECards show={showSWECards} toggle={toggleShowSWECards} />
          <FlashcardApp show={showFlashcardApp} toggle={toggleShowFlashcardApp} />
          <RecycleBin show={showRecycleBin} toggle={toggleShowRecycleBin} />

          {showHelp && <ArtPrompt show={showHelp} toggle={handleCloseHelp} />}

          {/* Add the new section with HeroSection and DefinitionSection */}
          <div className="main-container">
            <HeroSection />
            <DefinitionSection />
          </div>
        </WindowSizeProvider>
      </>
  );
}

export default App;
