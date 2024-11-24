# Project Directory Structure

```
src/
├── assets/
    ├── Logo.svg
    └── react.svg
├── components/
    ├── WallpaperOverlay/
    │   ├── DefinitionSection.jsx
    │   └── HeroSection.jsx
    ├── customTaskbar/
    │   ├── Frame/
    │   │   ├── Frame.css.mjs
    │   │   ├── Frame.css.ts.vanilla.css
    │   │   └── Frame.mjs
    │   ├── TaskBar/
    │   │   ├── Clock.mjs
    │   │   ├── TaskBar.css.mjs
    │   │   ├── TaskBar.css.ts.vanilla.css
    │   │   ├── TaskBar.mjs
    │   │   └── WindowButton.mjs
    │   ├── Tooltip/
    │   │   ├── Tooltip.css.mjs
    │   │   ├── Tooltip.css.ts.vanilla.css
    │   │   └── Tooltip.mjs
    │   └── shared/
    │   │   └── events.mjs
    ├── ArtPrompt.jsx
    ├── ArtsAndCrafts.jsx
    ├── Coding.jsx
    ├── Contact.jsx
    ├── Credit.jsx
    ├── DemoComp.jsx
    ├── Desktop.jsx
    ├── NavbarComp.jsx
    ├── PaintComp.jsx
    ├── RecycleBin.jsx
    ├── Resume.jsx
    ├── StreamingComp.jsx
    ├── TaskBarComp.jsx
    ├── Trailer.jsx
    └── WindowSizeContext.jsx
├── images/
    └── my-art/
    │   ├── abstract-vent/
    │       ├── amogus.png
    │       ├── angel.png
    │       ├── blob.png
    │       ├── blue.jpg
    │       ├── cry.png
    │       ├── dissociation.png
    │       ├── ed.png
    │       ├── heart.png
    │       ├── life.png
    │       ├── mirror.png
    │       ├── nb.jpg
    │       ├── person.png
    │       ├── pink.jpg
    │       ├── ppl.png
    │       ├── scream.png
    │       ├── skull.png
    │       ├── smiley.png
    │       ├── sun.png
    │       ├── walk.png
    │       └── weird.jpg
    │   └── normal/
    │       ├── AZ.png
    │       ├── Sierra-birthday-gift.png
    │       ├── art_trade.png
    │       ├── bestfriends.png
    │       ├── catpixel.jpg
    │       ├── colorbw.jpg
    │       ├── dweam.png
    │       ├── grian.png
    │       ├── icouldvesavedu.png
    │       ├── juliamer.png
    │       ├── katla.png
    │       ├── kittymmbr.png
    │       ├── larsScene.png
    │       ├── larsandbass.png
    │       ├── moon.png
    │       ├── puffle.jpg
    │       └── wivnpirpi.jpg
├── styles/
    └── moddedtheme.css
├── videos/
    ├── flappyBird.mp4
    ├── frogger.mp4
    ├── harrypotter.mp4
    ├── housedecor.mp4
    └── snake.mp4
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── printProject - Copy.py
├── printProject.py
└── project_structure.md
```

# File Contents

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\App.css`
```css

.desktop-icons {
  width: 70px;
  height: 70px;
  margin: 4px;
  text-align: center;
  color: white;
  cursor: pointer;
  user-select: none;
}

.desktop-icons p {
  text-align: center;
}

.active-icon {
  background: rgba(12, 0, 120, 0.6);
  border: 1px white dotted;
}

.inactive-icon {
  text-decoration: none;
}

.dropdown-menu {
  position: absolute; /* Ensure it positions relative to the modal */
  z-index: 9999; /* Ensure it appears above other elements */
}

.address-bar {
  display: flex;
  padding: 5px;
}

.streaming-icons {
  display: flex;
}

.streaming-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  cursor: pointer;
}

/* .streaming-dropdown {
  width: 300px;
} */

.twitch-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.arts-fields {
  display: flex;
  /* height: 90%; */
}

.arts-picture-text {
  display: flex;
  padding: 5px;
}

.arts-img-div {
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
}

.arts-img-div > .arts-frame {
  position: absolute;
  top: 0;
  left: 50%; /* Center horizontally */
  transform: translateX(
    -50%
  ); /* Pull it back by 50% of its width to center it */
  width: 95%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arts-img-div img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  padding: 3px;
}

.arts-tree {
  width: 100%;
  overflow: auto;
}

.arts-bg-button {
  margin-left: 10px;
}

.resume-skills {
  padding: 5px;
}

.resize {
  resize: both;
  overflow: auto;
}

.contact-icons a {
  padding: 3px;
}

.contact-info {
  padding: 15px;
}

.rc-flex-container {
  display: flex;
}

.rc-list {
  display: flex;
  user-select: none;
}

.rc-item {
  min-width: 180px;
  width: 100%;
}

.rc-list-span {
  display: inline-block;
  padding-top: 5px;
}

/* Teal Background */
body {
  background-color: #008080; /* Teal background */
  background-size: cover;
}

/* Additional container for HeroSection and DefinitionSection */
.main-container {
  background-color: #383434; /* Dark gray background */
  color: white; /* White text */
  padding: 2rem;
  width: 50%;
  box-shadow: inset 0 8px 10px rgba(0, 0, 0, 0.7); /* Inset shadow */
  border: 1px solid #4B5563; /* Gray border */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* Center the container */
  gap: 1rem; /* Space between hero and definition sections */
}

/* Hero Section */
.hero-section {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

/* Responsive Logo */
.responsive-logo {
  width: 100%; /* Take up 100% of the parent container */
  max-width: 600px; /* Limit the width to the original 600px */
  height: auto; /* Ensure the aspect ratio is maintained (600:388) */
}



/* Definition Section */
.definition-section {
  text-align: left;
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;
  font-family: 'Courier New', Courier, monospace;
  color: #a0aec0;
}

.definition-section .bold-text {
  font-weight: bold;
}

/* Wrapper for typing effect with fixed width */
.typing-wrapper {
  display: inline-block;
  width: 17ch; /* Ensure it never grows beyond this width */
  position: relative;
}

/* Typing Effect */
.typing-effect {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #ff6347; /* Accent color for cursor */
  animation: typing 4s steps(40, end) infinite, blink-caret 0.75s step-end infinite;
  width: 17ch; /* Fixed width for the typing effect */
  vertical-align: bottom; /* Align typing effect with the rest of the text */
  position: absolute; /* Position inside the wrapper */
  top: 0;
  left: 0;
}

/* Invisible text to maintain layout consistency */
.invisible-text {
  visibility: hidden;
  display: inline-block;
  width: 17ch; /* Match the width of the typing effect */
}

/* Typing Animation */
@keyframes typing {
  0% {
    width: 0;
  }
  70% {
    width: 17ch;
  }
  85% {
    width: 17ch;
  }
  100% {
    width: 0;
  }
}

/* Blinking cursor animation */
@keyframes blink-caret {
  from, to {
    border-right-color: transparent;
  }
  50% {
    border-right-color: #4dabf7; /* Accent color for cursor */
  }
}

.bold-checkbox label {
  font-weight: bold;
}


/* For WebKit browsers (Chrome, Safari, new Edge) */
.scrollable-content {
  scrollbar-color: #c0c0c0 #e0e0e0; /* For Firefox: Thumb and track colors */
  scrollbar-width: auto; /* For Firefox: width can be 'thin', 'auto', or specific values */
  overflow-y: scroll; /* Ensure scrollbar is always visible */
}

/* For WebKit browsers */
.scrollable-content::-webkit-scrollbar {
  width: 20px; /* Thicker scrollbar */
}

.scrollable-content::-webkit-scrollbar-track {
  background: #e0e0e0; /* Track color */
  border-left: 2px solid #808080; /* Windows 95 style border */
}

.scrollable-content::-webkit-scrollbar-thumb {
  background-color: #c0c0c0; /* Thumb color */
  border-radius: 0px; /* Square corners */
  border: 2px solid #808080; /* Thicker border for visibility */
  min-height: 40px; /* Minimum height for thumb */
}

.scrollable-content::-webkit-scrollbar-thumb:hover {
  background-color: #a0a0a0; /* Darker thumb when hovered */
}

.scrollable-content::-webkit-scrollbar-button {
  background-color: #c0c0c0; /* Scrollbar button color */
  border: 2px solid #808080; /* Button border */
  height: 20px; /* Height of scrollbar button */
}

.scrollable-content::-webkit-scrollbar-button:hover {
  background-color: #a0a0a0; /* Darker color when hovered */
}

.scrollable-content::-webkit-scrollbar-thumb:vertical,
.scrollable-content::-webkit-scrollbar-thumb:vertical:window-inactive {
  background-color: #c0c0c0;
  border: 2px solid #808080;
}

.scrollable-content::-webkit-scrollbar-track:window-inactive {
  background-color: #d8d8d8; /* Slightly lighter when inactive */
}

.scrollable-content::-webkit-scrollbar-button:window-inactive {
  background-color: #d0d0d0; /* Lighter button color when inactive */
  border: 2px solid #a0a0a0;
}

/* For Firefox */
.scrollable-content {
  scrollbar-color: #c0c0c0 #e0e0e0; /* Thumb and track colors */
  scrollbar-width: thin; /* Set scrollbar to be thinner */
}

/* Fallback for older browsers, like Internet Explorer */
.scrollable-content {
  overflow-y: scroll; /* Always visible scrollbar */
}

/* Optional: Add custom styles for other non-standard browsers if needed */
/* For Edge (old versions) and IE */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .scrollable-content {
    /* You can apply specific styles for these browsers */
    scrollbar-base-color: #c0c0c0;
    scrollbar-face-color: #c0c0c0;
    scrollbar-track-color: #e0e0e0;
    scrollbar-arrow-color: #808080;
    scrollbar-highlight-color: #e0e0e0;
  }
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\App.jsx`
```jsx
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

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\index.css`
```css

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\main.jsx`
```jsx
// import { ModalProvider } from '@react95/core'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import '@react95/core/GlobalStyle';
import './styles/moddedtheme.css';

import "react-resizable/css/styles.css";

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\ArtPrompt.jsx`
```jsx
import React, { useState, useEffect } from "react";
import { Modal, Fieldset, Tabs, Tab, TitleBar } from "@react95/core";
import { HelpBook } from "@react95/icons";
import { Hourglass } from "react95";
import { useWindowSize } from "./WindowSizeContext";

export default function ArtPrompt(props) {
  const [palette, setPalette] = useState([]);
  const [emoji, setEmoji] = useState();
  const [loading, setLoading] = useState(false);
  const showHelp = props.show;
  const handleCloseHelp = props.toggle;

  const windowSmall = useWindowSize();

  // Function to fetch color palette from the vercel backend
  const fetchPalette = async () => {
    try {
      const response = await fetch(
        "https://portfolio-server-gamma-inky.vercel.app/api/palette"
      ); // Fetch from the backend server
      const data = await response.json();

      // Check if the data contains the result array
      if (data.result) {
        setPalette(data.result); // Set the palette with the RGB values array
      }
      setLoading(true);
    } catch (error) {
      console.error("Error fetching color palette:", error);
    }
  };

  // Fetch color palette on component mount
  useEffect(() => {
    fetchPalette();
  }, []);

  // Function to fetch emoji from api
  const fetchEmoji = async () => {
    try {
      const response = await fetch("https://emojihub.yurace.pro/api/random"); // fetch a random emoji from the api
      const data = await response.json();
      if (data && data.htmlCode) {
        // Check for the correct structure
        setEmoji(data.htmlCode[0]); // Set the emoji using the first HTML code in the array
        // console.log(data.htmlCode[0]);
      }
    } catch (error) {
      console.error("Error fetching emoji", error);
    }
  };

  // Fetch color palette on component mount
  useEffect(() => {
    fetchEmoji();
  }, []);

  // Define the default position
  const screenW = window.innerWidth * 0.06; // Initial width 50% of screen
  const screenH = -30;

  return (
    <>
      {showHelp && (
        <Modal
          key="help-modal"
          icon={<HelpBook variant="16x16_4" />}
          title="What should I draw?"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help
              key="help"
              onClick={() => {
                alert("Help!");
              }}
            />,
            <TitleBar.Close key="close" onClick={handleCloseHelp} />,
          ]}
          buttons={[
            {
              value: "Ok",
              onClick: handleCloseHelp,
            },
            {
              value: "Generate palette again",
              onClick: () => {
                fetchPalette(); // Fetch a new palette when clicked
              },
            },
            {
              value: "Generate emoji again",
              onClick: () => {
                fetchEmoji(); // Fetch a new emoji when clicked
              },
            },
          ]}
        >
          <Tabs width="400px" defaultActiveTab="Color Palette">
            <Tab title="Color Palette">
            <div style={windowSmall ? ({ height: (window.innerHeight * 0.7), overflow:"auto" }) : null}>
                <p>
                  If you need ideas for what to draw, feel free to use the
                  generated color palette:
                </p>
                <Fieldset legend="Generated Color Palette">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {loading ? (
                      palette.map((color, index) => (
                        <div
                          key={index}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div
                            style={{
                              backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`, // Use the RGB values for the color
                              width: "20px",
                              height: "20px",
                              margin: "5px",
                              border: "1px solid #000",
                            }}
                          ></div>
                          <p>{`RGB(${color[0]}, ${color[1]}, ${color[2]})`}</p>
                        </div>
                      ))
                    ) : (
                      <Hourglass size={32} style={{ margin: 20 }} />
                    )}
                  </div>
                </Fieldset>
                <h4>How to use palette</h4>
                <ul>
                  <li>Click the color you want to replace</li>
                  <li>Click "Colors" in the menu above</li>
                  <li>Click "Edit colors..."</li>
                  <li>Click "Define Custom Colors"</li>
                  <li>Click an empty custom color</li>
                  <li>Enter the RGB values</li>
                  <li>Click "Add To Custom Colors"</li>
                  <li>Click "Ok"</li>
                  <li>Do this for all the colors</li>
                </ul>
              </div>
            </Tab>
            <Tab title="Mood">
              <p>
                Here is a random emoji to determine the mood of your drawing, if
                you want:
              </p>
              <h1 dangerouslySetInnerHTML={{ __html: emoji }}></h1>
            </Tab>
          </Tabs>
        </Modal>
      )}
    </>
  );
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\ArtsAndCrafts.jsx`
```jsx
import React, { useState, useEffect } from "react";
import {
  Modal,
  List,
  Frame,
  Tree,
  Dropdown,
  Button,
  TitleBar,
} from "@react95/core";
import { Winpopup3 } from "@react95/icons";
import { useWindowSize } from "./WindowSizeContext";

const getNormalImages = async () => {
  // Dynamically import all images from the folder
  const images = import.meta.glob("../images/my-art/normal/*.{png,jpg,jpeg}");

  // Resolve image paths and return an array of image objects
  const imagePromises = Object.keys(images).map(async (key, index) => {
    const imagePath = await images[key](); // Await the dynamic import to get the actual image path
    const imageName = key.split("/").pop(); // Extract the filename

    return {
      id: `artFile${index}`,
      label: imageName,
      src: imagePath.default, // Access the default export, which contains the path for image
    };
  });

  return Promise.all(imagePromises); // Wait for all image paths to be resolved
};

const getAbstractImages = async () => {
  // Dynamically import all images from the folder
  const images = import.meta.glob(
      "../images/my-art/abstract-vent/*.{png,jpg,jpeg}"
  );

  // Resolve image paths and return an array of image objects
  const imagePromises = Object.keys(images).map(async (key, index) => {
    const imagePath = await images[key](); // Await the dynamic import to get the actual image path
    const imageName = key.split("/").pop(); // Extract the filename

    return {
      id: `artFile${index}`,
      label: imageName,
      src: imagePath.default, // Access the default export, which contains the path for image
    };
  });

  return Promise.all(imagePromises); // Wait for all image paths to be resolved
};

export default function ArtsAndCrafts(props) {
  const showArtsAndCrafts = props.show;
  const toggleShowArtsAndCrafts = props.toggle;
  const [image, setImage] = useState("");
  const [isImageModalOpen, setIsImageModalOpen] = useState(false); // For controlling the full-screen image view

  const handleCloseArtsAndCrafts = () => {
    toggleShowArtsAndCrafts(false);
    setImage("");
  };

  const handleImageClick = (imageSrc) => {
    setImage(imageSrc);
  };

  const handleOpenImageModal = (imageSrc) => {
    setImage(imageSrc);
    setIsImageModalOpen(true); // Open the full-screen modal
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false); // Close the full-screen modal
  };

  // Define the default position
  const screenW = window.innerWidth * 0.06; // Initial width 50% of screen
  const screenH = -30;

  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    // Fetch and set the images when the component mounts
    const fetchImages = async () => {
      const normalImages = await getNormalImages();
      const abstractImages = await getAbstractImages();

      const treeStructure = [
        {
          id: "myComputer",
          label: "My Computer",
          children: [
            {
              id: "artsAndCrafts",
              label: "Arts & Crafts",
              children: [
                {
                  id: "myArt",
                  label: "My Art",
                  children: [
                    {
                      id: "normal",
                      label: "Normal",
                      children: normalImages.map((image) => ({
                        id: image.id,
                        onClick: () => handleImageClick(image.src),
                        label: (
                            <span style={{ cursor: "pointer" }}>
                            {image.label}
                          </span>
                        ),
                        icon: (
                            <img
                                src={image.src}
                                alt={image.label}
                                style={{ width: "15px" }}
                                loading="lazy"
                            />
                        ),
                      })),
                    },
                    {
                      id: "abstract",
                      label: "Abstract/Vent",
                      children: abstractImages.map((image) => ({
                        id: image.id,
                        onClick: () => handleImageClick(image.src),
                        label: (
                            <span style={{ cursor: "pointer" }}>
                            {image.label}
                          </span>
                        ),
                        icon: (
                            <img
                                src={image.src}
                                alt={image.label}
                                style={{ width: "15px" }}
                                loading="lazy"
                            />
                        ),
                      })),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
      setTreeData(treeStructure); // Set the tree structure with the images
    };

    fetchImages();
  }, []);
  const windowSmall = useWindowSize();

  return (
      <>
        {showArtsAndCrafts && (
            <Modal
                width="700px"
                height={windowSmall ? "470px" : "600px"}
                icon={<Winpopup3 variant="16x16_4" />}
                title="Arts & Crafts"
                dragOptions={{
                  defaultPosition: {
                    x: screenW,
                    y: screenH,
                  },
                }}
                titleBarOptions={[
                  <TitleBar.Help
                      key="help"
                      onClick={() => {
                        alert("Help!");
                      }}
                  />,
                  <TitleBar.Close key="close" onClick={handleCloseArtsAndCrafts} />,
                ]}
                menu={[
                  {
                    name: (
                        <>
                          <u>F</u>ile
                        </>
                    ),
                    list: (
                        <List width="200px" className="dropdown-menu">
                          <List.Item key="exit-item" onClick={handleCloseArtsAndCrafts}>
                            Exit
                          </List.Item>
                        </List>
                    ),
                  },
                  {
                    name: (
                        <>
                          <u>E</u>dit
                        </>
                    ),
                    list: (
                        <List width="200px" className="dropdown-menu">
                          <List.Item key="copy-item">Copy</List.Item>
                        </List>
                    ),
                  },
                ]}
            >
              <div
                  className="arts-fields"
                  style={windowSmall ? { height: "90%" } : { height: "100%" }}
              >
                <Frame
                    w="100%"
                    h="100%"
                    bgColor="$material"
                    boxShadow="$out"
                    padding="$4"
                >
                  <Frame h="100%" bgColor="white" boxShadow="$in" overflow="auto">
                    <div className="arts-tree">
                      <Tree data={treeData} />
                    </div>
                  </Frame>
                </Frame>
                <Frame w="100%" h="100%" bgColor="$material" boxShadow="$in">
                  <div className="arts-picture-text">
                    <span style={{ padding: "5px" }}>Picture Text:</span>
                    <Dropdown options={[image]} />
                  </div>
                  <div className="arts-img-div">
                    <Frame
                        className="arts-frame"
                        w="100%"
                        h="100%"
                        bgColor="$material"
                        boxShadow="$out"
                    >
                      <img src={image} alt={image} />
                    </Frame>
                  </div>
                  <Button
                      onClick={() => handleOpenImageModal(image)}
                      className="arts-bg-button"
                  >
                    Fullscreen
                  </Button>
                </Frame>
              </div>
            </Modal>
        )}

        {/* Full-Screen Image Modal */}
        {isImageModalOpen && (
            <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0, 0, 0, 0.9)", // Dark background for focus
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 10000, // High z-index to cover everything
                }}
            >
              <img
                  src={image}
                  alt="Full view"
                  style={{ maxWidth: "90%", maxHeight: "90%" }}
              />
              <Button
                  onClick={handleCloseImageModal}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    zIndex: 10001,
                  }}
              >
                Close
              </Button>
            </div>
        )}
      </>
  );
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\Coding.jsx`
```jsx
import { useEffect, useState } from "react";
import {
  Modal,
  List,
  Frame,
  Tree,
  Dropdown,
  Tab,
  Tabs,
  TitleBar,
  Button,
} from "@react95/core";
import { MystifyYourMind100 } from "@react95/icons";
import DemoComp from "./DemoComp";
import { useWindowSize } from "./WindowSizeContext";

const videoFiles = import.meta.glob("/src/videos/*.mp4");

export default function Coding(props) {
  const showCoding = props.show;
  const toggleShowCoding = props.toggle;
  const [showProject, setShowProject] = useState("");
  const [showDemoComp, toggleShowDemoComp] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleOpenDemoComp = () => toggleShowDemoComp(true);

  const windowSmall = useWindowSize();

  const handleCloseCoding = () => {
    toggleShowCoding(false);
    setShowProject("");
    setVideoUrl(null);
  };

  const handleProjectClick = (project) => {
    setShowProject(project);
  };

  // Use useEffect to load the video when the showProject changes
  useEffect(() => {
    const loadVideo = async () => {
      if (showProject.demo) {
        const videoPath = `/${showProject.demo}`; // Ensure correct path format
        const videoModule = await videoFiles[videoPath]?.(); // Load the video module
        if (videoModule) {
          const videoUrl = videoModule.default; // Get the video URL
          setVideoUrl(videoUrl); // Set video URL
        } else {
          // console.warn(`Video not found for path: ${videoPath}`);
          setVideoUrl(null); // Handle the case where the video is not found
        }
      } else {
        setVideoUrl(null); // No video for this project
      }
    };

    loadVideo();
  }, [showProject]); // Trigger useEffect whenever showProject changes

  // Helper function to group projects from chat gpt
  function groupProjectsByLanguageAndCategory(projects) {
    return projects.reduce((acc, project) => {
      const { language, category } = project;

      // Initialize language group if not present
      if (!acc[language]) {
        acc[language] = {};
      }

      // Initialize category group if not present
      if (!acc[language][category]) {
        acc[language][category] = [];
      }

      // Add the entire project object to the respective language and category
      acc[language][category].push(project);

      return acc;
    }, {});
  }
  //
   const myProjects = [
    {
      id: "fl4shc4rd",
      name: "fl4shc4rd!11",
      description:
        "tba",
      github: " ",
      language: "Go",
      category: "",
      icon: "./c.png",
      demo: ""
    }]
  //   {
  //     id: "hearthstoneDeckBuilder",
  //     name: "Hearthstone Battlegrounds Deck Builder",
  //     description:
  //       "A super simple deck builder for 'Hearthstone Battlegrounds'. The design is minimalistic because the goal here was to learn how to use an API. Just a heads-up: it might take a second for the cards to load after you click 'Find cards', but hey, it's a work in progress!",
  //     github: "https://github.com/nofreewilljackson/get_academy/tree/main/api-key",
  //     language: "JavaScript",
  //     category: "MVC",
  //     icon: "./js.png",
  //     demo: "https://nofreewilljackson.github.io/get_academy/api-key/index.html",
  //   },
  //   {
  //     id: "catClicker",
  //     name: "Cat Clicker",
  //     description:
  //       "Ever heard of Cookie Clicker? Well, this is basically that... but with cats! :3 Just a cute, simple idle clicker game to pass the time.",
  //     github:
  //       "https://github.com/nofreewilljackson/get_academy/tree/main/idle_game_cleanUp",
  //     language: "JavaScript",
  //     category: "",
  //     icon: "./js.png",
  //     demo: "https://nofreewilljackson.github.io/get_academy/idle_game_cleanUp/index.html",
  //   },
  //   {
  //     id: "nonogram",
  //     name: "Nonogram",
  //     description:
  //       "A simple but fun nonogram puzzle game! If you're into logic puzzles, this one’s for you. It’s all about solving grids by filling in the right boxes.",
  //     github: "https://github.com/nofreewilljackson/get_academy/tree/main/nonogram",
  //     language: "JavaScript",
  //     category: "",
  //     icon: "./js.png",
  //     demo: "https://nofreewilljackson.github.io/get_academy/nonogram/index.html",
  //   },
  //   {
  //     id: "simonSays",
  //     name: "Simon Says",
  //     description:
  //       "A straightforward 'Simon Says' app—just like the classic memory game! Challenge your brain and see how many sequences you can remember.",
  //     github: "https://github.com/nofreewilljackson/get_academy/tree/main/simon_says",
  //     language: "JavaScript",
  //     category: "",
  //     icon: "./js.png",
  //     demo: "https://nofreewilljackson.github.io/get_academy/simon_says/index.html",
  //   },
  //   {
  //     id: "slideshow",
  //     name: "Slideshow",
  //     description:
  //       "A simple yet smooth slideshow with nice sliding animations. It’s like PowerPoint… but way cooler. I mean, who doesn’t love a good slideshow?",
  //     github:
  //       "https://github.com/nofreewilljackson/get_academy/blob/main/slideshow/index2.html",
  //     language: "JavaScript",
  //     category: "",
  //     icon: "./js.png",
  //     demo: "https://nofreewilljackson.github.io/get_academy/slideshow/index2.html",
  //   },
  //   {
  //     id: "been2",
  //     name: "Been 2",
  //     description:
  //       "My first full-stack project! This is a React-based site that lets you track which countries and capital cities you’ve visited. It’s built with Node.js, Express, and msSQL for the database. No demo yet, but it’s coming soon!",
  //     github:
  //       "https://github.com/nofreewilljackson/Get_emne_5/tree/main/been2_thirdtry",
  //     language: "JavaScript",
  //     category: "React",
  //     icon: "./js.png",
  //     demo: "no demo yet",
  //   },
  //   {
  //     id: "portfolio",
  //     name: "My portfolio",
  //     description: (
  //       <>
  //         Literally the website you’re on right now! Built using React, and
  //         powered by the amazing{" "}
  //         <a
  //           href="https://github.com/React95/React95"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           React95 library
  //         </a>
  //         , giving it that retro Windows 95 desktop vibe.
  //       </>
  //     ),
  //     github: "https://github.com/nofreewilljackson/my-portfolio",
  //     language: "JavaScript",
  //     category: "React",
  //     icon: "./js.png",
  //     demo: "https://nofreewilljackson.github.io/my-portfolio/",
  //   },
  //   {
  //     id: "snake",
  //     name: "Snake",
  //     description:
  //       "The classic Snake game, but playable right in your terminal! Old-school fun, no frills—just pure nostalgia.",
  //     github: "https://github.com/nofreewilljackson/get_cSharp/tree/main/Snake/Snake",
  //     language: "C#",
  //     category: "",
  //     icon: "./cSharp.png",
  //     demo: "src/videos/snake.mp4",
  //   },
  //   {
  //     id: "flappyBird",
  //     name: "Flappy Bird",
  //     description:
  //       "Flappy Bird—but instead of a bird, it’s a butterfly! Fly through the obstacles in this terminal version of the game. Warning: it’s just as addicting.",
  //     github:
  //       "https://github.com/nofreewilljackson/get_cSharp/tree/main/FlappyBird/FlappyBird",
  //     language: "C#",
  //     category: "",
  //     icon: "./cSharp.png",
  //     demo: "src/videos/flappyBird.mp4",
  //   },
  //   {
  //     id: "frogger",
  //     name: "Frogger",
  //     description:
  //       "Frogger, the iconic game, playable in your terminal! Help the frog cross the road and river—watch out for cars!",
  //     github:
  //       "https://github.com/nofreewilljackson/get_cSharp/tree/main/Frogger/Frogger",
  //     language: "C#",
  //     category: "",
  //     icon: "./cSharp.png",
  //     demo: "src/videos/frogger.mp4",
  //   },
  //   {
  //     id: "harrypotter",
  //     name: "Hogwarts intro",
  //     description:
  //       "A console app that lets you feel like you’re entering Hogwarts! Experience the magic of the wizarding world (in a very console-y way).",
  //     github:
  //       "https://github.com/nofreewilljackson/get_cSharp/tree/main/HarryPotter/HarryPotter",
  //     language: "C#",
  //     category: "",
  //     icon: "./cSharp.png",
  //     demo: "src/videos/harrypotter.mp4",
  //   },
  //   {
  //     id: "housedecor",
  //     name: "House Decoration",
  //     description:
  //       "A console app where you can unleash your inner interior designer! Choose colors, furniture, and make the room of your dreams (just... in written form).",
  //     github:
  //       "https://github.com/nofreewilljackson/get_cSharp/tree/main/HouseDecoration/HouseDecoration",
  //     language: "C#",
  //     category: "",
  //     icon: "./cSharp.png",
  //     demo: "src/videos/housedecor.mp4",
  //   },
  // ];

  // Group projects by language and category
  const groupedProjects = groupProjectsByLanguageAndCategory(myProjects);

  // Build the tree structure
  const treeStructure = [
    {
      id: "myComputer",
      label: "My Computer",
      children: [
        {
          id: "coding",
          label: "Coding",
          children: Object.entries(groupedProjects).map(
            ([language, categories]) => ({
              id: language.toLowerCase(),
              label: `${language} Projects`,
              children: Object.entries(categories).map(
                ([category, projects]) => ({
                  id: category.toLowerCase() || "misc",
                  label: category ? `${category} Projects` : "Other Projects",
                  children: projects.map((project) => ({
                    id: project.id,
                    label: project.name, // Use the full project name here
                    icon: (
                      <img
                        src={project.icon}
                        alt={project.name}
                        style={{ height: "20px" }}
                      />
                    ), // Use the project icon
                    onClick: () => handleProjectClick(project), // Pass the entire project object here
                  })),
                })
              ),
            })
          ),
        },
      ],
    },
  ];

  // Define the default position
  const screenW = window.innerWidth * 0.08; // Initial width 50% of screen
  const screenH = -30;

  return (
    <>
      {showCoding && (
        <Modal
          width="700px"
          height={windowSmall ? "400px" : "600px"}
          icon={<MystifyYourMind100 variant="16x16_4" />}
          title="Coding"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help
              key="help"
              onClick={() => {
                alert("Help!");
              }}
            />,
            <TitleBar.Close key="close" onClick={handleCloseCoding} />,
          ]}
          menu={[
            {
              name: (
                <>
                  <u>F</u>ile
                </>
              ),
              list: (
                <List width="200px" className="dropdown-menu">
                  <List.Item key="exit-item" onClick={handleCloseCoding}>
                    Exit
                  </List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>E</u>dit
                </>
              ),
              list: (
                <List width="200px" className="dropdown-menu">
                  <List.Item key="copy-item">Copy</List.Item>
                </List>
              ),
            },
          ]}
        >
          <div
            className="arts-fields"
            style={windowSmall ? { height: "90%" } : { height: "100%" }}
          >
            <Frame
              w="100%"
              h="100%"
              bgColor="$material"
              boxShadow="$out"
              padding="$4"
            >
              <Frame h="100%" bgColor="white" boxShadow="$in" overflow="auto">
                <Tree data={treeStructure} />
              </Frame>
            </Frame>
            <Frame w="100%" h="100%" bgColor="$material" boxShadow="$in">
              <div className="arts-picture-text">
                <span style={{ padding: "5px" }}>Coding Project:</span>
                <Dropdown options={[showProject.name]} />
              </div>
              <Tabs width="100%" defaultActiveTab="Description">
                <Tab title="Description">
                  <p>{showProject.description}</p>
                </Tab>
                <Tab title="Demo">
                  {/* {videoUrl ? (
                    <video key={videoUrl} controls width="100%">
                      <source src={videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <p>This demo doesn't have a video</p>
                  )} */}
                  {videoUrl && <p>This demo is a video:</p>}
                  {/* <a
                    href={showProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Show Demo in another tab
                  </a> */}
                  <Button onClick={handleOpenDemoComp}>open demo</Button>
                </Tab>
                <Tab title="GitHub">
                  <a
                    href={showProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View code on GitHub
                  </a>
                </Tab>
              </Tabs>
            </Frame>
          </div>
        </Modal>
      )}
      <DemoComp
        show={showDemoComp}
        toggle={toggleShowDemoComp}
        url={showProject.demo}
        video={videoUrl}
      />
    </>
  );
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\Contact.jsx`
```jsx
import { useEffect, useState } from "react";
import { Modal, List, Frame, TitleBar, Tooltip } from "@react95/core";
import { Dialer1 } from "@react95/icons";

export default function Contact(props) {
  const showContact = props.show;
  const toggleShowContact = props.toggle;
  const handleCloseContact = () => {
    toggleShowContact(false);
  };

  // Define the default position
  const screenW = window.innerWidth * 0.06; // Initial width 50% of screen
  const screenH = -20;
  return (
      <>
        {showContact && (
            <Modal
                width="400px"
                height="200px"
                icon={<Dialer1 variant="16x16_4" />}
                title="Contact"
                dragOptions={{
                  defaultPosition: {
                    x: screenW,
                    y: screenH,
                  },
                }}
                titleBarOptions={[
                  <TitleBar.Help
                      key="help"
                      onClick={() => {
                        alert("Help!");
                      }}
                  />,
                  <TitleBar.Close key="close" onClick={handleCloseContact} />,
                ]}
                menu={[
                  {
                    name: (
                        <>
                          <u>F</u>ile
                        </>
                    ),
                    list: (
                        <List width="200px" className="dropdown-menu">
                          <List.Item key="exit-item" onClick={handleCloseContact}>
                            Exit
                          </List.Item>
                        </List>
                    ),
                  },
                  {
                    name: (
                        <>
                          <u>E</u>dit
                        </>
                    ),
                    list: (
                        <List width="200px" className="dropdown-menu">
                          <List.Item key="copy-item">Copy</List.Item>
                        </List>
                    ),
                  },
                ]}
            >
              <Frame w="100%" h="100%" bgColor="white" boxShadow="$in">
                <div className="contact-info">
                  <p>Let's get in touch through:</p>
                  <div className="contact-icons">
                    <Tooltip delay={500} text="Github">
                      <a
                          href="https://github.com/nofreewilljackson"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <img
                            src="./github-logo.png"
                            alt="Github"
                            style={{ width: "25px" }}
                        />
                      </a>
                    </Tooltip>
                    <Tooltip delay={500} text="Instagram">
                      <a
                          href="https://www.instagram.com/vaporwave.fm/"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <img
                            src="./Instagram-icon.png"
                            alt="Instagram"
                            style={{ width: "25px" }}
                        />
                      </a>
                    </Tooltip>
                    <Tooltip delay={500} text="Discord">
                      <a
                          href="https://discord.gg/404"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <img
                            src="./Discord-icon.png"
                            alt="Discord"
                            style={{ width: "25px" }}
                        />
                      </a>
                    </Tooltip>
                    <Tooltip delay={500} text="LinkedIn">
                      <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <img
                            src="./LinkedIn-icon.png"
                            alt="LinkedIn"
                            style={{ width: "25px" }}
                        />
                      </a>
                    </Tooltip>
                  </div>
                </div>
              </Frame>
            </Modal>
        )}
      </>
  );
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\Credit.jsx`
```jsx
import { Modal, List, Frame, TitleBar, Tooltip } from "@react95/core";
import { User } from "@react95/icons";

export default function Credit(props) {
  const showCredit = props.show;
  const toggleShowCredit = props.toggle;
  const handleCloseCredit = () => {
    toggleShowCredit(false);
  };

  // Define the default position
  const screenW = window.innerWidth * 0.04; // Initial width 50% of screen
  const screenH = -20;
  return (
    <>
      {showCredit && (
        <Modal
          width="400px"
        //   height="200px"
          icon={<User variant="16x16_4" />}
          title="Credit"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help
              key="help"
              onClick={() => {
                alert("Help!");
              }}
            />,
            <TitleBar.Close key="close" onClick={handleCloseCredit} />,
          ]}
          menu={[
            {
              name: (
                <>
                  <u>F</u>ile
                </>
              ),
              list: (
                <List width="200px" className="dropdown-menu">
                  <List.Item key="exit-item" onClick={handleCloseCredit}>
                    Exit
                  </List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>E</u>dit
                </>
              ),
              list: (
                <List width="200px" className="dropdown-menu">
                  <List.Item key="copy-item">Copy</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame w="100%" h="100%" bgColor="white" boxShadow="$in">
            <div className="contact-info">
              <p>
                Hannah for help with design.
                react-markdown
                r95
                Gabriel Eduardo
                vaporwave.fm
              </p>
            </div>
          </Frame>
        </Modal>
      )}
    </>
  );
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\DemoComp.jsx`
```jsx
import React, { useState } from "react";
import { Modal, Frame, List, Dropdown, TitleBar } from "@react95/core";
import {
  ArrowLeft,
  ArrowRight,
  Explore,
  Mplayer10,
  Printer,
  Mmsys113,
  Ie,
} from "@react95/icons";

export default function DemoComp(props) {
  const showDemoComp = props.show;
  const toggleShowDemoComp = props.toggle;
  const urlToShow = props.url;
  const videoUrl = props.video;

  const handleCloseDemoComp = () => toggleShowDemoComp(false);

  // Define the default position
  const screenW = window.innerWidth * 0.06; // Initial width 50% of screen
  const screenH = -30;

  return (
    <>
      {showDemoComp && (
        <Modal
          className="resize"
          key="demo-modal"
          width="90%"
          height="90%"
          icon={<Ie variant="16x16_8" />}
          title="Demo"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help
              key="help"
              onClick={() => {
                alert("Help!");
              }}
            />,
            <TitleBar.Close key="close" onClick={handleCloseDemoComp} />,
          ]}
          menu={[
            {
              name: (
                <>
                  <u>F</u>ile
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item key="exit-item" onClick={handleCloseDemoComp}>
                    Exit
                  </List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>E</u>dit
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item key="copy-item">Copy</List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>V</u>iew
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item key="idk-item-1">idk</List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>G</u>o
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item key="idk2-item-2">???</List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  F<u>a</u>vorites
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item key="idk2-item-3">??</List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>H</u>elp
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item key="idk2-item-4">??</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame
            key="streaming-frame-1"
            bgColor="$material"
            boxShadow="$out"
            h="45px"
            w="100%"
            style={{ position: "relative" }} // Ensure positioning
          >
            <div className="streaming-icons">
              <div className="streaming-icon" key="back-icon">
                <ArrowLeft variant="32x32_4" style={{ height: "25px" }} />
                <span>Back</span>
              </div>
              <div className="streaming-icon" key="forward-icon">
                <ArrowRight variant="32x32_4" style={{ height: "25px" }} />
                <span>Forward</span>
              </div>
              <div className="streaming-icon" key="search-icon">
                <Explore variant="32x32_4" style={{ height: "25px" }} />
                <span>Search</span>
              </div>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="streaming-icon" key="youtube-icon">
                  <Mplayer10 variant="32x32_4" style={{ height: "25px" }} />
                  <span>Youtube</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="streaming-icon" key="twitch-icon">
                  <Mmsys113 variant="32x32_4" style={{ height: "25px" }} />
                  <span>Deez</span>
                </div>
              </a>
              <div className="streaming-icon" key="print-icon">
                <Printer variant="32x32_4" style={{ height: "25px" }} />
                <span>Print</span>
              </div>
            </div>
          </Frame>
          <Frame
            key="streaming-frame-2"
            bgColor="$material"
            boxShadow="$out"
            h="30px"
            w="100%"
            style={{ position: "relative" }} // Ensure positioning
          >
            <div className="address-bar">
              <span style={{ padding: "5px" }}>Address</span>
              <Dropdown options={[urlToShow]} />
            </div>
          </Frame>
          <Frame
            key="streaming-frame-3"
            w="100%"
            h="100%"
            bgColor="$material"
            boxShadow="$out"
            padding="$4"
            overflow="auto"
          >
            {videoUrl ? (
              <video key={videoUrl} controls autoplay width="100%">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe src={urlToShow} width="100%" height="100%"></iframe>
            )}
          </Frame>
        </Modal>
      )}
    </>
  );
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\Desktop.jsx`
```jsx
import React, { useState } from "react";
import {
  Pbrush1,
  MsawtAwtIcon,
  Explorer108,
  Gcdef100,
  Progman11,
  Wordpad,
  Awfxcg321304,
} from "@react95/icons";

export default function Desktop(props) {
  const handleOpenPaint = props.openPaint;
  const handleOpenStreaming = props.openStreaming;
  const [activeIcon, setActiveIcon] = useState(null);
  const handleOpenCoding = props.openCoding;
  const handleOpenRecycleBin = props.openRecycleBin;
  const handleOpenArtsAndCrafts = props.openArts;
  const handleOpenResume = props.openResume;
  const handleOpenContact = props.openContact;

  const handleToggleIcon = (iconId) => {
    setActiveIcon((prev) => (prev === iconId ? null : iconId));
  };

  return (
    <div className="desktop-icons">
      <div
        className={activeIcon === 1 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(1)}
        onDoubleClick={handleOpenRecycleBin}
      >
        <Explorer108 variant="32x32_4" />
        <p>Recycle Bin</p>
      </div>
      <div
        className={activeIcon === 2 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(2)}
        onDoubleClick={handleOpenPaint}
      >
        <Pbrush1 variant="32x32_4" />
        <p>Paint</p>
      </div>
      <div
        className={activeIcon === 3 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(3)}
        onDoubleClick={handleOpenCoding}
      >
        <MsawtAwtIcon variant="32x32_4" />
        <p>Coding</p>
      </div>
      <div
        className={activeIcon === 4 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(4)}
        onDoubleClick={handleOpenStreaming}
      >
        <Gcdef100 variant="32x32_4" />
        <p>tbd</p>
      </div>
      <div
        className={activeIcon === 5 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(5)}
        onDoubleClick={handleOpenArtsAndCrafts}
      >
        <Progman11 variant="32x32_4" />
        <p>Arts & Crafts</p>
      </div>
      <div
        className={activeIcon === 6 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(6)}
        onDoubleClick={handleOpenResume}
      >
        <Wordpad variant="32x32_4" />
        <p>Resume</p>
      </div>
      <div
        className={activeIcon === 7 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(7)}
        onDoubleClick={handleOpenContact}
      >
        <Awfxcg321304 variant="32x32_4" />
        <p>Contact</p>
      </div>
    </div>
  );
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\NavbarComp.jsx`
```jsx
import React from "react";
import { Button } from "@react95/core";
import { Wordpad, MsawtAwtIcon, RecycleFull } from "@react95/icons";

export default function NavbarComp({ openResume, openCoding, openBlog }) {
    return (
        <div style={{ position: 'fixed', top: 10, right: 10, display: 'flex', gap: '10px' }}>
            {/* Resume Button with Icon */}
            <Button onClick={openResume}>
                <Wordpad variant="32x32_4" />
                <span style={{ marginLeft: '8px' }}>Resume</span>
            </Button>

            {/* Coding Button with Icon */}
            <Button onClick={openCoding}>
                <MsawtAwtIcon variant="32x32_4" />
                <span style={{ marginLeft: '8px' }}>Coding</span>
            </Button>

            {/* Paint Button with Icon */}
            <Button onClick={openBlog}>
                <RecycleFull variant="32x32_4" />
                <span style={{ marginLeft: '8px' }}>My Blog</span>
            </Button>
        </div>
    );
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\PaintComp.jsx`
```jsx
import React, { useState } from "react";
import { Modal, Frame, TitleBar } from "@react95/core";
import { Mspaint } from "@react95/icons";
import { useWindowSize } from "./WindowSizeContext";

export default function PaintComp(props) {
  const showPaint = props.show;
  const toggleShowPaint = props.toggle;
  const handleShowHelp = props.onHelp;

  const windowSmall = useWindowSize();
  

  // Define the default position
  const screenW = window.innerWidth * 0.06; // Initial width 50% of screen
  const screenH = -30;
  const handleClosePaint = () => toggleShowPaint(false);
  return (
    <>
      {showPaint && (
        <Modal
          className="resize"
          key="paint-modal"
          width="600px"
          height={windowSmall ? "400px" : "500px"}
          icon={<Mspaint variant="16x16_4" />}
          title="untitled - Paint (Not made by me)"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help key="help" onClick={handleShowHelp} />,
            // <TitleBar.Minimize />,
            <TitleBar.Close key="close" onClick={handleClosePaint} />,
          ]}
        >
          <Frame h="100%" w="100%" overflow="auto">
          {/* <div style={windowSmall ? ({ height: (window.innerHeight * 0.7), overflow:"auto" }) : null}> */}
            <iframe
              src="https://jspaint.app"
              width="100%"
              height="99%"
            ></iframe>
            {/* </div> */}
          </Frame>
        </Modal>
      )}
    </>
  );
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\RecycleBin.jsx`
```jsx
import React, { useState } from "react";
import { Modal, Frame, TitleBar, List } from "@react95/core";
import { RecycleFull, Shell322, Wangimg129 } from "@react95/icons";
import { useWindowSize } from "./WindowSizeContext";

export default function RecycleBin(props) {
  const showRecycleBin = props.show;
  const toggleShowRecycleBin = props.toggle;

  const windowSmall = useWindowSize();

  // Define the default position
  const screenW = window.innerWidth * 0.05; // Initial width 50% of screen
  const screenH = -30;
  const handleCloseRecycleBin = () => toggleShowRecycleBin(false);
  return (
      <>
        {showRecycleBin && (
            <Modal
                className="resize"
                key="recycleBin-modal"
                width="600px"
                height={windowSmall ? "400px" : "450px"}
                icon={<RecycleFull variant="16x16_4" />}
                title="Recycle Bin"
                dragOptions={{
                  defaultPosition: {
                    x: screenW,
                    y: screenH,
                  },
                }}
                titleBarOptions={[
                  <TitleBar.Help
                      key="help"
                      onClick={() => {
                        alert("Help!");
                      }}
                  />,
                  <TitleBar.Close key="close" onClick={handleCloseRecycleBin} />,
                ]}
                menu={[
                  {
                    name: (
                        <>
                          <u>F</u>ile
                        </>
                    ),
                    list: (
                        <List width="200px" className="dropdown-menu">
                          <List.Item key="exit-item" onClick={handleCloseRecycleBin}>
                            Exit
                          </List.Item>
                        </List>
                    ),
                  },
                  {
                    name: (
                        <>
                          <u>E</u>dit
                        </>
                    ),
                    list: (
                        <List width="200px" className="dropdown-menu">
                          <List.Item key="copy-item">Copy</List.Item>
                        </List>
                    ),
                  },
                ]}
            >
              <Frame h="100%" w="100%">
                <Frame w="100%" h="100%" bgColor="white" boxShadow="$in">
                  <div className="rc-flex-container">
                    <Frame
                        h="20px"
                        w="100%"
                        bgColor="$material"
                        boxShadow="$out"
                        style={{ padding: "4px", minWidth: "180px" }}
                    >
                      Name
                    </Frame>
                    <Frame
                        h="20px"
                        w="100%"
                        bgColor="$material"
                        boxShadow="$out"
                        style={{ padding: "4px", minWidth: "150px" }}
                    >
                      Type
                    </Frame>
                    <Frame
                        h="20px"
                        w="100%"
                        bgColor="$material"
                        boxShadow="$out"
                        style={{ padding: "4px", minWidth: "100px" }}
                    >
                      Total Size
                    </Frame>
                  </div>

                  {/* Funny contents in the recycle bin */}
                  <div className="rc-list">
                    <div className="rc-item">
                      <Shell322 variant="16x16_4" className="rc-list-span" />
                      <span className="rc-list-span">MyAnimeList_Profile-2020</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">HTML File</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">1.2 MB</span>
                    </div>
                  </div>
                  <div className="rc-list">
                    <div className="rc-item">
                      <Shell322 variant="16x16_4" className="rc-list-span"/>
                      <span className="rc-list-span">Roblox_FE_bypass_script</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">Lua Script</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">2806 KB</span>
                    </div>
                  </div>
                  <div className="rc-list">
                    <div className="rc-item">
                      <Shell322 variant="16x16_4" className="rc-list-span"/>
                      <span className="rc-list-span">Remote_Script_Execution_2021</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">Executable File</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">300 KB</span>
                    </div>
                  </div>
                  <div className="rc-list">
                    <div className="rc-item">
                      <Shell322 variant="16x16_4" className="rc-list-span"/>
                      <span className="rc-list-span">Resume_2021</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">PDF Document</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">150 KB</span>
                    </div>
                  </div>
                  <div className="rc-list">
                    <div className="rc-item">
                      <Shell322 variant="16x16_4" className="rc-list-span"/>
                      <span className="rc-list-span">Resume_2022</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">PDF Document</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">200 KB</span>
                    </div>
                  </div>
                  <div className="rc-list">
                    <div className="rc-item">
                      <Shell322 variant="16x16_4" className="rc-list-span"/>
                      <span className="rc-list-span">Resume_2023</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">PDF Document</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">250 KB</span>
                    </div>
                  </div>
                  <div className="rc-list">
                    <div className="rc-item">
                      <Wangimg129 variant="16x16_4" className="rc-list-span"/>
                      <span className="rc-list-span">oprahR34_Jan_2023</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">JPG File</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">300 KB</span>
                    </div>
                  </div>
                  <div className="rc-list">
                    <div className="rc-item">
                      <Wangimg129 variant="16x16_4" className="rc-list-span"/>
                      <span className="rc-list-span">terraria_Screenshot_Mar_2023</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">PNG File</span>
                    </div>
                    <div className="rc-item">
                      <span className="rc-list-span">450 KB</span>
                    </div>
                  </div>
                </Frame>
              </Frame>
            </Modal>
        )}
      </>
  );
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\Resume.jsx`
```jsx
import { useEffect, useState } from "react";
import {
  Modal,
  Fieldset,
  Tabs,
  Tab,
  Checkbox,
  ProgressBar,
  Avatar,
  TitleBar,
  Button,
} from "@react95/core";
import jacksonPlate from '/jacksonplate.png';  // Note the leading slash
import { New16 } from "@react95/icons";
import { useWindowSize } from "./WindowSizeContext";

export default function Resume(props) {
  const showResume = props.show;
  const toggleShowResume = props.toggle;
  const handleCloseResume = () => {
    toggleShowResume(false);
  };

  const windowSmall = useWindowSize();

  // List of avatar images to cycle through
  const avatars = [
    "./about1.png",
    "./about2.png",
    "./about3.png",
    "./about4.png",
    "./about5.png",
  ];

  const [currentAvatar, setCurrentAvatar] = useState(0);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [cooldownTimer, setCooldownTimer] = useState(null);

  // Auto-rotate avatar every 2 seconds
  useEffect(() => {
    if (isAutoRotate) {
      const intervalId = setInterval(() => {
        setCurrentAvatar((prevAvatar) => (prevAvatar + 1) % avatars.length);
      }, 2000); // Change avatar every 2 seconds

      return () => clearInterval(intervalId); // Cleanup interval on unmount
    }
  }, [isAutoRotate, avatars.length]);

  // Reset auto-rotation with a 5-second cooldown
  const resetAutoRotateWithCooldown = () => {
    setIsAutoRotate(false); // Stop auto-rotation on manual interaction
    if (cooldownTimer) {
      clearTimeout(cooldownTimer);
    }
    const timer = setTimeout(() => {
      setIsAutoRotate(true); // Resume auto-rotation after 5 seconds
    }, 5000);
    setCooldownTimer(timer);
  };

  // Function to manually go to the previous avatar
  const handlePreviousAvatar = () => {
    setCurrentAvatar((prevAvatar) =>
        prevAvatar === 0 ? avatars.length - 1 : prevAvatar - 1
    );
    resetAutoRotateWithCooldown(); // Trigger cooldown
  };

  // Function to manually go to the next avatar
  const handleNextAvatar = () => {
    setCurrentAvatar((prevAvatar) => (prevAvatar + 1) % avatars.length);
    resetAutoRotateWithCooldown(); // Trigger cooldown
  };

  // Define the default position
  const screenW = 88;
  const screenH = 22;

  return (
      <>
        {showResume && (
            <Modal
                width={windowSmall ? "100%" : "30vw"}
                height={windowSmall ? "100%" : "auto"}
                style={{
                  maxWidth: windowSmall ? "100vw" : "none",
                  maxHeight: windowSmall ? "100vh" : "none",
                  overflow: "auto",
                  position: "absolute",
                  left: windowSmall ? 0 : screenW,
                  top: windowSmall ? 0 : screenH,
                }}
                icon={<New16 variant="16x16_4" />}
                title="Resume"
                dragOptions={windowSmall ? { disabled: true } : {
                  defaultPosition: {
                    x: screenW -88,
                    y: screenH -22,
                  },
                }}
                titleBarOptions={[
                  <TitleBar.Help
                      key="help"
                      onClick={() => {
                        alert("if you feel like you can't handle life's curveballs, remember we all in this sinking titanic and will die soon anyway so just chill out!");
                      }}
                  />,
                  <TitleBar.Close key="close" onClick={handleCloseResume} />,
                ]}
            >
              <Tabs defaultActiveTab="About">
                <Tab title="About">
                  <div
                      className="scrollable-content" // Add this class for custom scrollbar styling
                      style={{
                        maxHeight: "calc(90vh - 100px)", // Adjust maxHeight based on modal height
                        overflowY: "auto",
                        paddingRight: "15px", // Adjust for scrollbar width
                      }}
                  >
                    <h3
                        style={{
                          margin: 0,
                          padding: 0,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '100%'  // Ensure the h3 takes full width
                        }}
                    >
                      <img
                          src={jacksonPlate}
                          alt="Jackson W"
                          loading="lazy"
                          style={{
                            height: '58px',
                            width: 'auto',
                            display: 'block',
                            margin: '2px 0',  // Add some vertical margin if needed
                            transform: 'translateX(-48px)'
                          }}
                      />
                    </h3>

                    {/* Avatar with manual and auto-rotation */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Button onClick={handlePreviousAvatar}>
                        &#8592; {/* Left arrow */}
                      </Button>
                      <Avatar src={avatars[currentAvatar]} alt="Profile" size="330px" />
                      <Button onClick={handleNextAvatar}>
                        &#8594; {/* Right arrow */}
                      </Button>
                    </div>

                    {/* Indicator for current avatar */}
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                      {avatars.map((_, index) => (
                          <div
                              key={index}
                              style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: currentAvatar === index ? "black" : "lightgray",
                                margin: "0 5px",
                              }}
                          />
                      ))}
                    </div>

                    <p>
                      <b>Location:</b> San Marcos, TX 78666 <br />
                      <b>Email:</b> <a href="mailto:jackson.w@example.com">jackson.w@malleablemind.ai</a> <br />
                      <b>Phone:</b> (512) 123-4567
                    </p>
                    <Fieldset legend="About me">
                      <p>
                        'sup. I'm Jackson, an aspiring developer with a passion for solving complex problems. My journey into the tech world started early, and I thrive on new challenges and fast-paced learning.
                      </p>

                      <p>
                        To me, Computer Science is the ultimate tool for modeling reality. It's the application of mathematics and logic to the real world, allowing us to study and simulate the complexities of life through computation. This perspective fascinates me because it means we can tackle real-world challenges in innovative ways.
                      </p>

                      <p>
                        Whether it's optimizing food supply chains or creating more efficient communication systems, CS gives us the power to make a tangible impact on people's lives. I approach each project as an opportunity to create meaningful solutions, always keeping in mind that the most impactful tech often lies in addressing fundamental human needs with elegance and simplicity.
                      </p>

                      <p>
                        Outside of coding, you'll find me skateboarding—my go-to way to recharge. I also share downtime with my cat, Sadie, the queen of the house (check out her gallery on this site! 🐾).
                      </p>

                      <p>
                        I'm all about creating things that make a difference while having fun. If you love coding, skating, or cats (especially Sadie), we'll probably get along great!
                      </p>
                    </Fieldset>
                  </div>
                </Tab>

                {/* Education Tab */}
                <Tab title="Education">

                  <div className="scrollable-content"
                    style={{
                      maxHeight: "calc(90vh - 100px)",
                      overflowY: "auto",
                      paddingRight: "15px"
                    }}
                  >
                    <Fieldset legend="Education">
                    <Checkbox readOnly checked={true}>
                      <strong>Bachelor of Science in Computer Science, Minor in Applied Mathematics - Texas State
                        University, San Marcos, TX</strong>
                    </Checkbox>
                    <p><b>Relevant Coursework:</b></p>
                    <ul style={{listStyleType: 'none', padding: 0}}>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="data structures" style={{marginRight: '10px'}}>🌳</span>
                        <strong>Data Structures & Algorithms:</strong> Mastered advanced problem-solving techniques and
                        optimized solution efficiency
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="OOP" style={{marginRight: '10px'}}>🧩</span>
                        <strong>Object-Oriented Programming:</strong> Developed robust, scalable software solutions
                        using design patterns
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="software engineering" style={{marginRight: '10px'}}>🚀</span>
                        <strong>Software Engineering:</strong> Collaborated on large-scale projects using Agile
                        methodologies and CI/CD practices
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="AI" style={{marginRight: '10px'}}>🤖</span>
                        <strong>Artificial Intelligence:</strong> Explored cutting-edge AI algorithms and applications,
                        including neural networks and expert systems
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="machine learning" style={{marginRight: '10px'}}>📊</span>
                        <strong>Machine Learning:</strong> Implemented predictive models using various ML techniques,
                        including supervised and unsupervised learning
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="networks security" style={{marginRight: '10px'}}>🔒</span>
                        <strong>Computer Networks/Systems Security:</strong> Designed secure network architectures and
                        implemented cybersecurity best practices
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="computer architecture" style={{marginRight: '10px'}}>🖥️</span>
                        <strong>Computer Architecture:</strong> Gained in-depth understanding of hardware-software
                        interaction and system optimization
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="assembly" style={{marginRight: '10px'}}>⚙️</span>
                        <strong>Assembly Language:</strong> Developed low-level programming skills, optimizing code for
                        specific hardware architectures
                      </li>
                      <li style={{marginBottom: '10px'}}>
                        <span role="img" aria-label="algorithm analysis" style={{marginRight: '10px'}}>📈</span>
                        <strong>Algorithm Analysis:</strong> Conducted in-depth analysis of algorithm efficiency and
                        complexity, optimizing for various scenarios
                      </li>
                    </ul>
                  </Fieldset></div>

                </Tab>

                {/* Work Experience Tab */}
                <Tab title="Work Experience">
                  <div className="scrollable-content"
                      style={{
                        maxHeight: "calc(90vh - 100px)",
                        overflowY: "auto",
                        paddingRight: "15px"
                      }}
                  >
                    <Fieldset legend="Work Experience">
                    <Checkbox readOnly checked={true}>
                      <strong>Front Manager at Formosa Garden, San Antonio, TX (Jan 2023 - Sep 2023)</strong>
                    </Checkbox>

                    <ul>
                      <li>Orchestrated over 60+ daily to-go orders, optimizing workflow for 30% faster processing</li>
                      <li>Implemented a customer feedback system, resulting in a 25% increase in positive reviews</li>
                      <li>Mentored and trained new staff, improving team efficiency by 20%</li>
                    </ul>
                    <Checkbox readOnly checked={true}>
                      <strong>Bartender at Formosa Garden, San Antonio, TX (Sep 2021 - Jan 2023)</strong>
                    </Checkbox>
                    <ul>
                      <li>Crafted a diverse menu of beverages, increasing bar sales by 15%</li>
                      <li>Developed a streamlined inventory system, reducing waste by 10%</li>
                      <li>Maintained 100% accuracy in cash handling and end-of-day reconciliation</li>
                    </ul>
                  </Fieldset></div>
                </Tab>

                {/* Projects Tab */}
                <Tab title="Projects">
                  <div className="scrollable-content"
                       style={{
                         maxHeight: "calc(90vh - 100px)",
                         overflowY: "auto",
                         paddingRight: "15px"
                       }}
                  >
                    <Fieldset legend="Projects">
                    <Checkbox readOnly checked={true}>
                      Golang Discord Bot with OpenAI Integration (Aug 2024 - Present)
                    </Checkbox>
                    <ul>
                      <li>Engineered a sophisticated bot that reduced content review time by 60% through AI-powered
                        summarization
                      </li>
                      <li>Architected a high-performance RESTful API using Gin, improving data retrieval speed by 40%
                      </li>
                      <li>Integrated advanced sentiment analysis using scikit-learn, enhancing user interaction
                        insights
                      </li>
                      <li>Implemented robust security measures including OAuth2 authentication and environment variable
                        protection
                      </li>
                      <li>Established a CI/CD pipeline with GitHub Actions, reducing deployment downtime by 50%</li>
                    </ul>
                  </Fieldset></div>
                </Tab>

                {/* Skills Tab */}
                <Tab title="Skills">
                  <div className="scrollable-content"
                       style={{
                         maxHeight: "calc(90vh - 100px)",
                         overflowY: "auto",
                         paddingRight: "15px"
                       }}
                  >
                    <div style={windowSmall ? {height: window.innerHeight * 0.7, overflow: "auto"} : null}>
                    <Fieldset legend="Technical Skills">
                      <ul>
                        <li className="resume-skills">HTML/CSS</li>
                        <ProgressBar percent={97} width="200px"/>
                        <li className="resume-skills">JavaScript</li>
                        <ProgressBar percent={88} width="200px"/>
                        <li className="resume-skills">Go</li>
                        <ProgressBar percent={80} width="200px"/>
                        <li className="resume-skills">Python</li>
                        <ProgressBar percent={85} width="200px"/>
                        <li className="resume-skills">C++</li>
                        <ProgressBar percent={75} width="200px"/>
                        <li className="resume-skills">Java</li>
                        <ProgressBar percent={70} width="200px"/>
                      </ul>
                    </Fieldset>
                    <Fieldset legend="Frameworks & Technologies">
                      <ul>
                        <li className="resume-skills">Gin, Flask, Docker, NextJS</li>
                        <li className="resume-skills">PostgreSQL, MongoDB, MySQL</li>
                        <li className="resume-skills">Git/GitHub, RESTful APIs, OAuth2</li>
                        <li className="resume-skills">Machine Learning (scikit-learn, pandas)</li>
                      </ul>
                    </Fieldset>
                    <Fieldset legend="Languages (Speaking)">
                      <ul>
                        <li className="resume-skills">English</li>
                        <ProgressBar percent={100} width="200px"/>
                        <li className="resume-skills">Cantonese</li>
                        <ProgressBar percent={75} width="200px"/>
                      </ul>
                    </Fieldset>
                  </div></div>
                </Tab>

                {/* Personality Tab */}
                <Tab title="Personality">
                  <div className="scrollable-content"
                       style={{
                         maxHeight: "calc(90vh - 100px)",
                         overflowY: "auto",
                         paddingRight: "15px"
                       }}
                  >
                    <Fieldset legend="Personality Insights">
                    <ul>
                      <li className="resume-skills">MBTI: INTP/ENTP - Innovative problem-solver with a knack for
                        abstract thinking
                      </li>
                      <li className="resume-skills">Enneagram Type: 5w4 - Analytical and creative, with a deep desire
                        for knowledge
                      </li>
                      <li className="resume-skills">Typical Team Role: top fragger & lurker</li>
                    </ul>
                  </Fieldset>
                    <Fieldset legend="Key Strengths">
                      <ul style={{listStyleType: 'none', padding: 0}}>
                        <li style={{marginBottom: '15px'}}>
                          <span role="img" aria-label="customer service" style={{marginRight: '10px'}}>🤝</span>
                          <strong>Customer-Centric Problem Solving:</strong> My experience as a Front Manager and
                          Bartender honed my ability to understand and address customer needs effectively. This
                          customer-centric approach translates seamlessly into software development, where I prioritize
                          user experience and stakeholder satisfaction. I excel at bridging the gap between technical
                          solutions and user requirements, ensuring that the end product not only functions well but
                          also meets and exceeds user expectations.
                        </li>
                        <li style={{marginBottom: '15px'}}>
                          <span role="img" aria-label="big picture" style={{marginRight: '10px'}}>🔭</span>
                          <strong>Multidisciplinary Big Picture Thinking:</strong> With an unconventional & pragmatic
                          entry into the tech field, I bring a unique, holistic perspective to engineering challenges.
                          Rather than getting lost in the minutiae, I excel at seeing the broader context of a project
                          or problem. This big-picture thinking allows me to architect comprehensive solutions that
                          consider not just immediate technical requirements, but also long-term scalability,
                          cross-functional impacts, and alignment with overarching business goals. My ability to
                          synthesize concepts from various disciplines enables me to approach problems from multiple
                          angles, leading to innovative and efficient solutions that address both current needs and
                          future possibilities.
                        </li>
                        <li style={{marginBottom: '10px'}}>
                          <span role="img" aria-label="adaptable" style={{marginRight: '10px'}}>🔄</span>
                          <strong>Adaptable Learner:</strong> Passionate about emerging technologies and quick to master
                          new skills
                        </li>
                        <li style={{marginBottom: '10px'}}>
                          <span role="img" aria-label="analytical" style={{marginRight: '10px'}}>🧠</span>
                          <strong>Analytical Problem-Solver:</strong> Combine strong analytical skills with creative
                          approaches to tackle complex challenges
                        </li>
                        <li style={{marginBottom: '10px'}}>
                          <span role="img" aria-label="communicator" style={{marginRight: '10px'}}>🗣️</span>
                          <strong>Effective Communicator:</strong> Bridge the gap between technical and non-technical
                          stakeholders with ease
                        </li>
                      </ul>
                    </Fieldset></div>
                  {/* future proof */}
                </Tab>
              </Tabs>
            </Modal>
        )}
      </>
  );
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\StreamingComp.jsx`
```jsx
import React, { useState } from "react";
import { Modal, Frame, List, Dropdown, TitleBar } from "@react95/core";
import {
  ArrowLeft,
  ArrowRight,
  Explore,
  Mplayer10,
  Printer,
  Mmsys113,
} from "@react95/icons";
// import { ResizableBox } from "react-resizable";
import Trailer from "./Trailer";
import { useWindowSize } from "./WindowSizeContext";

export default function StreamingComp(props) {
  const showModal = props.show;
  const toggleShowModal = props.toggle;

  // const [contentSize, setContentSize] = useState({
  //   width: 700,
  //   height: 550,
  // });

  const windowSmall = useWindowSize();

  // Define the default position
  const screenW = window.innerWidth * 0.06; // Initial width 50% of screen
  const screenH = -30;

  const handleCloseModal = () => toggleShowModal(false);

  return (
    <>
      {showModal && (
        <Modal
          className="resize"
          key="streaming-modal"
          width="700px"
          height={windowSmall ? "450px" : "550px"}
          icon={
            <img
              src="./twitch-no-bg.png"
              alt="Twitch Icon"
              style={{ width: "16px", height: "16px" }}
            />
          }
          title="My Twitch"
          dragOptions={{
            defaultPosition: {
              x: screenW,
              y: screenH,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help
              key="help"
              onClick={() => {
                alert("Help!");
              }}
            />,
            <TitleBar.Close key="close" onClick={handleCloseModal} />,
          ]}
          menu={[
            {
              name: (
                <>
                  <u>F</u>ile
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item key="exit-item" onClick={handleCloseModal}>
                    Exit
                  </List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>E</u>dit
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item key="copy-item">Copy</List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>V</u>iew
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item key="idk-item-1">idk</List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>G</u>o
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item key="idk2-item-2">???</List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  F<u>a</u>vorites
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item key="idk2-item-3">??</List.Item>
                </List>
              ),
            },
            {
              name: (
                <>
                  <u>H</u>elp
                </>
              ),
              list: (
                <List
                  width="200px"
                  className="dropdown-menu" // Add class for custom styling
                >
                  <List.Item key="idk2-item-4">??</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame
            key="streaming-frame-1"
            bgColor="$material"
            boxShadow="$out"
            h="45px"
            w="100%"
            style={{ position: "relative" }} // Ensure positioning
          >
            <div className="streaming-icons">
              <div className="streaming-icon" key="back-icon">
                <ArrowLeft variant="32x32_4" style={{ height: "25px" }} />
                <span>Back</span>
              </div>
              <div className="streaming-icon" key="forward-icon">
                <ArrowRight variant="32x32_4" style={{ height: "25px" }} />
                <span>Forward</span>
              </div>
              <div className="streaming-icon" key="search-icon">
                <Explore variant="32x32_4" style={{ height: "25px" }} />
                <span>Search</span>
              </div>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="streaming-icon" key="youtube-icon">
                  <Mplayer10 variant="32x32_4" style={{ height: "25px" }} />
                  <span>Youtube</span>
                </div>
              </a>
              <a
                href="https://www.twitch.tv/nofreewilljackson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="streaming-icon" key="twitch-icon">
                  <Mmsys113 variant="32x32_4" style={{ height: "25px" }} />
                  <span>Twitch</span>
                </div>
              </a>
              <div className="streaming-icon" key="print-icon">
                <Printer variant="32x32_4" style={{ height: "25px" }} />
                <span>Print</span>
              </div>
            </div>
          </Frame>
          <Frame
            key="streaming-frame-2"
            bgColor="$material"
            boxShadow="$out"
            h="30px"
            w="100%"
            style={{ position: "relative" }} // Ensure positioning
          >
            <div className="address-bar">
              <span style={{ padding: "5px" }}>Address</span>
              {/* <Frame
                bgColor="white"
                boxShadow="$in"
                h="20px"
                w="100%"
                style={{ position: "relative", padding: "5px" }} // Ensure positioning
              > */}
              <Dropdown options={["https://www.twitch.tv/nofreewilljackson"]} />
              {/* https://www.twitch.tv/nofreewilljackson */}
              {/* </Frame> */}
            </div>
          </Frame>
          <Frame
            key="streaming-frame-3"
            w="100%"
            h="100%"
            bgColor="$material"
            boxShadow="$out"
            padding="$4"
            overflow="auto"
          >
            <Frame
              key="streaming-frame-4"
              h="100%"
              bgColor="white"
              boxShadow="$in"
              overflow="auto"
            >
              <div className="twitch-page">
                <img
                  src="Twitch_logo.png"
                  alt="Twitch logo"
                  style={{ height: "50px" }}
                />
                <Trailer />
              </div>
            </Frame>
          </Frame>
        </Modal>
      )}
    </>
  );
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\TaskBarComp.jsx`
```jsx
import { useState } from "react";
import { Modal, List } from "@react95/core";
import { TaskBar } from "./customTaskbar/TaskBar/TaskBar.mjs";

import {
  Gcdef100,
  FolderExe2,
  MsawtAwtIcon,
  Mspaint,
  Wordpad,
  HelpBook,
  Computer3,
  Awfxcg321304,
  Winpopup3,
  MsDos,
  Awfxcg321303,
  Grpconv100,
} from "@react95/icons";

function TaskBarComp(props) {
  const handleOpenPaint = props.openPaint;
  const handleOpenStreaming = props.openStreaming;
  const handleOpenCoding = props.openCoding;
  const handleOpenArtsAndCrafts = props.openArts;
  const handleOpenResume = props.openResume;
  const handleOpenContact = props.openContact;
  const handleOpenCredit = props.openCredit;
  return (
    <>
      <TaskBar
        list={
          <List>
            <List.Item
              icon={
                <img
                  src="./github-logo.png"
                  alt="Github"
                  style={{
                    width: "32px",
                    marginLeft: "-20px",
                    marginRight: "10px",
                  }}
                  />
                }
                onClick={() => window.open("https://github.com", "_blank")}
            >
              repo
            </List.Item>
            <List.Item icon={<FolderExe2 variant="32x32_4" />}>
              Programs
              <List width={"200px"}>
                <List.Item
                  icon={<Winpopup3 variant="16x16_4" />}
                  onClick={handleOpenArtsAndCrafts}
                >
                  Arts & Crafts
                </List.Item>
                <List.Item
                  icon={<MsawtAwtIcon variant="16x16_4" />}
                  onClick={handleOpenCoding}
                >
                  Coding
                </List.Item>
                <List.Item
                  icon={<Awfxcg321304 variant="16x16_4" />}
                  onClick={handleOpenContact}
                >
                  Contact
                </List.Item>
                <List.Item
                  icon={<Mspaint variant="16x16_4"/>}
                  onClick={handleOpenPaint}
                >
                  Paint
                </List.Item>
                <List.Item
                  icon={<Wordpad variant="16x16_4" />}
                  onClick={handleOpenResume}
                >
                  Resume
                </List.Item>
                <List.Item
                  icon={<Gcdef100 variant="16x16_4" />}
                  onClick={handleOpenStreaming}
                >
                  tbd
                </List.Item>
              </List>
            </List.Item>
            <List.Item icon={<Awfxcg321303 variant="32x32_4" />} onClick={handleOpenCredit}>
              8
            </List.Item>
            <List.Item icon={<MsDos variant="32x32_32" />}>
              MS-DOS Prompt
            </List.Item>

            {/* <List.Item icon={<FolderFile variant="32x32_4" />}>
              Documents
            </List.Item> */}
            {/* <List.Item icon={<Settings variant="32x32_4" />}>
              Settings
              <List width={"200px"}>
                <List.Item icon={<FolderSettings variant="16x16_4" />}>
                  Control Panel
                </List.Item>
                <List.Item icon={<FolderPrint variant="16x16_4" />}>
                  Printers
                </List.Item>
              </List>
            </List.Item> */}
            {/* <List.Item icon={<FileFind variant="32x32_4" />}>Find</List.Item> */}
            <List.Item icon={<HelpBook variant="32x32_4" />}>Help</List.Item>

            {/* <List.Item icon={<LoaderBat variant="32x32_4" />}>Run...</List.Item> */}
            <List.Divider />
            <List.Item icon={<Computer3 variant="32x32_4" />}>
              Shut Down...
            </List.Item>
          </List>
        }
      />
    </>
  );
}

export default TaskBarComp;

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\Trailer.jsx`
```jsx
import React from 'react';
import { Video } from "@react95/core";

export default function Trailer() {
  return (
    <div>
      <Video w="420px" src={"trailer.mp4"} name="Channel Trailer" />
    </div>
  )
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\WindowSizeContext.jsx`
```jsx
import React, { useContext, createContext, useState, useEffect } from "react";

const WindowSizeContext = createContext();

export function useWindowSize() {
  return useContext(WindowSizeContext);
}

export default function WindowSizeProvider({ children }) {
  const [windowSmall, setWindowSmall] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowSmall(window.innerWidth < 1337); // || window.innerHeight < 555)
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial render

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <WindowSizeContext.Provider value={windowSmall}>
        {children}
      </WindowSizeContext.Provider>
  );
}

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\customTaskbar\\Frame\\Frame.css.ts.vanilla.css`
```css
.r95_iuzg891 {
  display: var(--r95_iuzg890);
}
.r95_iuzg893 {
  overflow: var(--r95_iuzg892);
}
.r95_iuzg895 {
  box-sizing: var(--r95_iuzg894);
}
.r95_iuzg897 {
  grid: var(--r95_iuzg896);
}
.r95_iuzg899 {
  grid-area: var(--r95_iuzg898);
}
.r95_iuzg89b {
  grid-auto-columns: var(--r95_iuzg89a);
}
.r95_iuzg89d {
  grid-auto-flow: var(--r95_iuzg89c);
}
.r95_iuzg89f {
  grid-auto-rows: var(--r95_iuzg89e);
}
.r95_iuzg89h {
  grid-column: var(--r95_iuzg89g);
}
.r95_iuzg89j {
  grid-column-end: var(--r95_iuzg89i);
}
.r95_iuzg89l {
  grid-column-start: var(--r95_iuzg89k);
}
.r95_iuzg89n {
  grid-row: var(--r95_iuzg89m);
}
.r95_iuzg89p {
  grid-row-end: var(--r95_iuzg89o);
}
.r95_iuzg89r {
  grid-row-start: var(--r95_iuzg89q);
}
.r95_iuzg89t {
  grid-template: var(--r95_iuzg89s);
}
.r95_iuzg89v {
  grid-template-areas: var(--r95_iuzg89u);
}
.r95_iuzg89x {
  grid-template-columns: var(--r95_iuzg89w);
}
.r95_iuzg89z {
  grid-template-rows: var(--r95_iuzg89y);
}
.r95_iuzg8911 {
  flex: var(--r95_iuzg8910);
}
.r95_iuzg8913 {
  flex-basis: var(--r95_iuzg8912);
}
.r95_iuzg8915 {
  flex-direction: var(--r95_iuzg8914);
}
.r95_iuzg8917 {
  flex-flow: var(--r95_iuzg8916);
}
.r95_iuzg8919 {
  flex-grow: var(--r95_iuzg8918);
}
.r95_iuzg891b {
  flex-shrink: var(--r95_iuzg891a);
}
.r95_iuzg891d {
  flex-wrap: var(--r95_iuzg891c);
}
.r95_iuzg891f {
  justify-content: var(--r95_iuzg891e);
}
.r95_iuzg891h {
  justify-items: var(--r95_iuzg891g);
}
.r95_iuzg891j {
  justify-self: var(--r95_iuzg891i);
}
.r95_iuzg891l {
  align-content: var(--r95_iuzg891k);
}
.r95_iuzg891n {
  align-items: var(--r95_iuzg891m);
}
.r95_iuzg891p {
  align-self: var(--r95_iuzg891o);
}
.r95_iuzg891r {
  gap: var(--r95_iuzg891q);
}
.r95_iuzg891t {
  width: var(--r95_iuzg891s);
}
.r95_iuzg891v {
  max-width: var(--r95_iuzg891u);
}
.r95_iuzg891x {
  min-width: var(--r95_iuzg891w);
}
.r95_iuzg891z {
  height: var(--r95_iuzg891y);
}
.r95_iuzg8921 {
  max-height: var(--r95_iuzg8920);
}
.r95_iuzg8923 {
  min-height: var(--r95_iuzg8922);
}
.r95_iuzg8925 {
  margin: var(--r95_iuzg8924);
}
.r95_iuzg8927 {
  margin-block: var(--r95_iuzg8926);
}
.r95_iuzg8929 {
  margin-block-end: var(--r95_iuzg8928);
}
.r95_iuzg892b {
  margin-block-start: var(--r95_iuzg892a);
}
.r95_iuzg892d {
  margin-bottom: var(--r95_iuzg892c);
}
.r95_iuzg892f {
  margin-inline: var(--r95_iuzg892e);
}
.r95_iuzg892h {
  margin-inline-end: var(--r95_iuzg892g);
}
.r95_iuzg892j {
  margin-inline-start: var(--r95_iuzg892i);
}
.r95_iuzg892l {
  margin-left: var(--r95_iuzg892k);
}
.r95_iuzg892n {
  margin-right: var(--r95_iuzg892m);
}
.r95_iuzg892p {
  margin-top: var(--r95_iuzg892o);
}
.r95_iuzg892r {
  padding: var(--r95_iuzg892q);
}
.r95_iuzg892t {
  padding-block: var(--r95_iuzg892s);
}
.r95_iuzg892v {
  padding-block-end: var(--r95_iuzg892u);
}
.r95_iuzg892x {
  padding-block-start: var(--r95_iuzg892w);
}
.r95_iuzg892z {
  padding-bottom: var(--r95_iuzg892y);
}
.r95_iuzg8931 {
  padding-inline: var(--r95_iuzg8930);
}
.r95_iuzg8933 {
  padding-inline-end: var(--r95_iuzg8932);
}
.r95_iuzg8935 {
  padding-inline-start: var(--r95_iuzg8934);
}
.r95_iuzg8937 {
  padding-left: var(--r95_iuzg8936);
}
.r95_iuzg8939 {
  padding-right: var(--r95_iuzg8938);
}
.r95_iuzg893b {
  padding-top: var(--r95_iuzg893a);
}
.r95_iuzg893d {
  position: var(--r95_iuzg893c);
}
.r95_iuzg893f {
  top: var(--r95_iuzg893e);
}
.r95_iuzg893h {
  right: var(--r95_iuzg893g);
}
.r95_iuzg893j {
  bottom: var(--r95_iuzg893i);
}
.r95_iuzg893l {
  left: var(--r95_iuzg893k);
}
.r95_iuzg893n {
  pointer-events: var(--r95_iuzg893m);
}
.r95_iuzg893p {
  background-color: var(--r95_iuzg893o);
}
.r95_iuzg893r {
  color: var(--r95_iuzg893q);
}
.r95_iuzg893t {
  background: var(--r95_iuzg893s);
}
.r95_iuzg893v {
  background-attachment: var(--r95_iuzg893u);
}
.r95_iuzg893x {
  background-image: var(--r95_iuzg893w);
}
.r95_iuzg893z {
  background-position: var(--r95_iuzg893y);
}
.r95_iuzg8941 {
  background-repeat: var(--r95_iuzg8940);
}
.r95_iuzg8943 {
  background-size: var(--r95_iuzg8942);
}
.r95_iuzg8945 {
  background-origin: var(--r95_iuzg8944);
}
.r95_iuzg8947 {
  background-clip: var(--r95_iuzg8946);
}
.r95_iuzg8949 {
  border: var(--r95_iuzg8948);
}
.r95_iuzg894b {
  border-style: var(--r95_iuzg894a);
}
.r95_iuzg894d {
  border-width: var(--r95_iuzg894c);
}
.r95_iuzg894f {
  border-color: var(--r95_iuzg894e);
}
.r95_iuzg894h {
  border-top: var(--r95_iuzg894g);
}
.r95_iuzg894j {
  border-top-color: var(--r95_iuzg894i);
}
.r95_iuzg894l {
  border-top-style: var(--r95_iuzg894k);
}
.r95_iuzg894n {
  border-top-width: var(--r95_iuzg894m);
}
.r95_iuzg894p {
  border-right: var(--r95_iuzg894o);
}
.r95_iuzg894r {
  border-right-color: var(--r95_iuzg894q);
}
.r95_iuzg894t {
  border-right-style: var(--r95_iuzg894s);
}
.r95_iuzg894v {
  border-right-width: var(--r95_iuzg894u);
}
.r95_iuzg894x {
  border-bottom: var(--r95_iuzg894w);
}
.r95_iuzg894z {
  border-bottom-color: var(--r95_iuzg894y);
}
.r95_iuzg8951 {
  border-bottom-style: var(--r95_iuzg8950);
}
.r95_iuzg8953 {
  border-bottom-width: var(--r95_iuzg8952);
}
.r95_iuzg8955 {
  border-left: var(--r95_iuzg8954);
}
.r95_iuzg8957 {
  border-left-color: var(--r95_iuzg8956);
}
.r95_iuzg8959 {
  border-left-style: var(--r95_iuzg8958);
}
.r95_iuzg895b {
  border-left-width: var(--r95_iuzg895a);
}
.r95_iuzg895d {
  border-bottom-left-radius: var(--r95_iuzg895c);
}
.r95_iuzg895f {
  border-bottom-right-radius: var(--r95_iuzg895e);
}
.r95_iuzg895h {
  border-image: var(--r95_iuzg895g);
}
.r95_iuzg895j {
  border-image-outset: var(--r95_iuzg895i);
}
.r95_iuzg895l {
  border-image-repeat: var(--r95_iuzg895k);
}
.r95_iuzg895n {
  border-image-slice: var(--r95_iuzg895m);
}
.r95_iuzg895p {
  border-image-source: var(--r95_iuzg895o);
}
.r95_iuzg895r {
  border-image-width: var(--r95_iuzg895q);
}
.r95_iuzg895t {
  border-radius: var(--r95_iuzg895s);
}
.r95_iuzg895v {
  border-top-left-radius: var(--r95_iuzg895u);
}
.r95_iuzg895x {
  border-top-right-radius: var(--r95_iuzg895w);
}
.r95_iuzg895z {
  box-shadow: var(--r95_iuzg895y);
}
.r95_iuzg8961 {
  outline: var(--r95_iuzg8960);
}
.r95_iuzg8963 {
  outline-color: var(--r95_iuzg8962);
}
.r95_iuzg8965 {
  outline-style: var(--r95_iuzg8964);
}
.r95_iuzg8967 {
  outline-width: var(--r95_iuzg8966);
}
.r95_iuzg8969 {
  font: var(--r95_iuzg8968);
}
.r95_iuzg896b {
  font-family: var(--r95_iuzg896a);
}
.r95_iuzg896d {
  font-style: var(--r95_iuzg896c);
}
.r95_iuzg896f {
  font-size: var(--r95_iuzg896e);
}
.r95_iuzg896h {
  font-weight: var(--r95_iuzg896g);
}
.r95_iuzg896j {
  font-variant: var(--r95_iuzg896i);
}
.r95_iuzg896l {
  font-size-adjust: var(--r95_iuzg896k);
}
.r95_iuzg896n {
  color: var(--r95_iuzg896m);
}
.r95_iuzg896p {
  direction: var(--r95_iuzg896o);
}
.r95_iuzg896r {
  letter-spacing: var(--r95_iuzg896q);
}
.r95_iuzg896t {
  line-height: var(--r95_iuzg896s);
}
.r95_iuzg896v {
  text-align: var(--r95_iuzg896u);
}
.r95_iuzg896x {
  text-decoration: var(--r95_iuzg896w);
}
.r95_iuzg896z {
  text-indent: var(--r95_iuzg896y);
}
.r95_iuzg8971 {
  text-shadow: var(--r95_iuzg8970);
}
.r95_iuzg8973 {
  text-transform: var(--r95_iuzg8972);
}
.r95_iuzg8975 {
  vertical-align: var(--r95_iuzg8974);
}
.r95_iuzg8977 {
  white-space: var(--r95_iuzg8976);
}
.r95_iuzg8979 {
  word-spacing: var(--r95_iuzg8978);
}
.r95_iuzg897b {
  word-break: var(--r95_iuzg897a);
}
.r95_iuzg897d {
  z-index: var(--r95_iuzg897c);
}
```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\customTaskbar\\TaskBar\\TaskBar.css.ts.vanilla.css`
```css
.r95_1ct83mo0 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: left;
}
.r95_1ct83mo1 div:first-child {
  right: 0;
}
.r95_1ct83mo2 {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--r95-color-material);
  padding-block: var(--r95-space-2);
  padding-inline: var(--r95-space-3);
  margin-right: var(--r95-space-2);
  max-width: 150px;
  border: none;
  outline: none;
  color: var(--r95-color-materialText);
}
.r95_1ct83mo3 {
  padding-inline: var(--r95-space-5);
}
.r95_1ct83mo4 {
  width: 100%;
}
.r95_1ct83mo5 {
  box-shadow: var(--r95-shadow-in);
}
.r95_1ct83mo6 {
  box-shadow: var(--r95-shadow-out);
}
.r95_1ct83mo7 {
  padding-top: var(--r95-space-4);
  padding-bottom: var(--r95-space-0);
  outline: var(--r95-space-1) dotted var(--r95-color-borderDarkest);
  outline-offset: calc(var(--r95-space-4) * -1);
}
.r95_1ct83mo8 {
  background-color: var(--r95-color-borderLighter);
}
.r95_1ct83mo9 svg {
  margin-top: var(--r95-space-4);
  margin-right: var(--r95-space-4);
  min-width: var(--r95-space-2);
  width: var(--r95-space-20);
  height: var(--r95-space-20);
  shape-rendering: auto;
}
```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\customTaskbar\\Tooltip\\Tooltip.css.ts.vanilla.css`
```css
.r95_f5whxn0 {
  background: radial-gradient(#ff0 20%, transparent 20%) 0 0,
radial-gradient(#ff0 20%, transparent 20%) 4px 4px,
radial-gradient(rgba(255, 255, 255, 0.1) 20%, transparent 25%) 0 1px,
radial-gradient(rgba(255, 255, 255, 0.1) 20%, transparent 25%) 3px 4px;
  background-size: var(--r95-space-7) var(--r95-space-7);
  background-color: var(--r95-color-borderLightest);
  border-width: var(--r95-space-1);
  border-style: solid;
  padding-top: var(--r95-space-2);
  padding-right: var(--r95-space-2);
  padding-bottom: var(--r95-space-2);
  padding-left: var(--r95-space-4);
  box-shadow: none;
  position: absolute;
  top: calc(var(--r95-space-20) * -1);
  text-align: center;
  z-index: var(--r95-zIndex-taskbar);
}
.r95_f5whxn1 {
  display: inline-block;
  position: relative;
  cursor: default;
  white-space: nowrap;
}
```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\WallpaperOverlay\\DefinitionSection.jsx`
```jsx
import React from 'react';

const DefinitionSection = () => {
    return (
        <div className="definition-section">
            <span className="bold-text">malleable</span> (mal-ee-uh-buhl) <br />
            <span>adj. A canvas for infinite possibilities, </span>
            <div className="typing-wrapper">
                <span className="typing-effect">forever unfolding...........</span>
                <span className="invisible-text">forever unfolding...........</span>
            </div>
        </div>
    );
};

export default DefinitionSection;

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\components\\WallpaperOverlay\\HeroSection.jsx`
```jsx
import React from 'react';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <img
                src="/Logo.svg"
                alt="if this doesn't render then fuck you"
                className="responsive-logo"
            />
        </section>
    );
};

export default HeroSection;

```

## `C:\\Dev\\jacksonwufinalfantasy8\\src\\styles\\moddedtheme.css`
```css
:root {
    --r95-zIndex-modal: 2;
    --r95-zIndex-tooltip: 3;
    --r95-zIndex-taskbar: 3;
    --r95-space-0: 0px;
    --r95-space-1: 1px;
    --r95-space-2: 2px;
    --r95-space-3: 3px;
    --r95-space-4: 4px;
    --r95-space-5: 5px;
    --r95-space-6: 6px;
    --r95-space-7: 7px;
    --r95-space-8: 8px;
    --r95-space-9: 9px;
    --r95-space-10: 10px;
    --r95-space-11: 11px;
    --r95-space-12: 12px;
    --r95-space-13: 13px;
    --r95-space-14: 14px;
    --r95-space-15: 15px;
    --r95-space-16: 16px;
    --r95-space-17: 17px;
    --r95-space-18: 18px;
    --r95-space-19: 19px;
    --r95-space-20: 20px;

    --r95-color-anchor: #1034a6;
    --r95-color-anchorVisited: #440381;

    /* Updated Dark Teal */
    --r95-color-borderDark: #006a68; /* Slightly darker teal for contrast */
    --r95-color-borderDarkest: #004a48;
    --r95-color-borderLight: #58d3d1;
    --r95-color-borderLighter: #88e1df;
    --r95-color-borderLightest: #b8f2f0;

    --r95-color-canvas: #f4f6f5; /* Warmer canvas color */
    --r95-color-canvasText: #000000;

    /* Harmonized Header Colors */
    --r95-color-headerBackground: #00746b; /* Dark teal for header */
    --r95-color-headerNotActiveBackground: #70a09f; /* Muted teal for inactive header */
    --r95-color-headerNotActiveText: #e6dbbc; /* Softer gold accent */
    --r95-color-headerText: #f3f7f7; /* Light teal */

    /* Darkened Teal for Material and Text Contrast */
    --r95-color-material: #54b8b7; /* Slightly darker teal for better text contrast */
    --r95-color-materialText: #101010; /* Darker gray for stronger contrast */
    --r95-color-materialTextDisabled: #73c8c6; /* Lightened teal for disabled text */
    --r95-color-materialTextDisabledShadow: #eff1f3;
    --r95-color-materialTextInvert: #eff1f3;

    /* Harmonized Progress Bar */
    --r95-color-progress: #dfb14f; /* Muted gold for progress bar */

    /* Softer Burnt Orange Accent */
    --r95-color-anchorVisited: #a35330; /* Reduced saturation for a refined burnt orange */

    --r95-color-inputBackground: #ffffff;
    --r95-color-inputBackgroundDisabled: #88e1df; /* Softer teal for disabled input */

    /* Updated Shadows with Enhanced Depth */
    --r95-shadow-out: inset 0.5px 0.5px 0px 0.5px #b8f2f0,
    inset 0 0 0 1px #006a68,
    1px 0px 0 0px #004a48,
    0px 1px 0 0px #004a48,
    1px 1px 0 0px #004a48;

    --r95-shadow-in: inset 0px 0px 0px 0px,
    inset 1px 1px 0px 0px #006a68,
    0.5px 0.5px 0px 0.5px #b8f2f0;

    --r95-shadow-input: inset -1px -1px 0 0 #008a88,
    inset 1px 1px 0 0 #004a48,
    0.5px 0.5px 0 0.5px #b8f2f0;
}

```

