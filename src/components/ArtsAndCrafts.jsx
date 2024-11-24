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
