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
