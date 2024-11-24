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
