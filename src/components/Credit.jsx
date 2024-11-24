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
