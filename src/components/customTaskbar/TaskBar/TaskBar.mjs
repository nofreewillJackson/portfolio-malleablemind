import React, { forwardRef, useState, useEffect } from "react";
import { Frame } from "../Frame/Frame.mjs";
import { Clock } from "./Clock.mjs";
import { WindowButton } from "./WindowButton.mjs";
import customLogo from '/src/assets/startlogo.svg';
import { truncate } from "./TaskBar.css.mjs";
import { modals, ModalEvents } from "@react95/core/esm/shared/events.mjs";

const TaskBar = forwardRef(
  ({ list }, ref) => {
    const [showList, toggleShowList] = useState(false);
    const [activeStart, toggleActiveStart] = useState(false);
    const [modalWindows, setModalWindows] = React.useState([]);
    const [activeWindow, setActiveWindow] = useState();
    useEffect(() => {
      const addModal = (window) => {
        setModalWindows((prevModals) => [...prevModals, window]);
      };
      const removeModal = (data) => {
        setModalWindows((prevModals) => {
          const filteredModals = prevModals.filter(
            (modal) => modal.id !== data.id
          );
          const lastModal = filteredModals.at(-1);
          if (!activeWindow && lastModal) {
            modals.emit(ModalEvents.ModalVisibilityChanged, {
              id: lastModal == null ? void 0 : lastModal.id
            });
          }
          return filteredModals;
        });
      };
      const updateVisibleModal = ({ id }) => {
        setActiveWindow(id);
      };
      modals.on(ModalEvents.AddModal, addModal);
      modals.on(ModalEvents.RemoveModal, removeModal);
      modals.on(ModalEvents.ModalVisibilityChanged, updateVisibleModal);
      return () => {
        modals.off(ModalEvents.AddModal, addModal);
        modals.off(ModalEvents.RemoveModal, removeModal);
        modals.off(ModalEvents.ModalVisibilityChanged, updateVisibleModal);
      };
    }, []);
    return /* @__PURE__ */ React.createElement(
      Frame,
      {
        position: "fixed",
        bottom: "3px",
        left: "3px",
        right: "0px",
        display: "flex",
        justifyContent: "space-between",
        h: "38px",
        w: "100%",
        padding: "$2",
        zIndex: "$taskbar",
        backgroundColor: "$material",
        boxShadow: "$out",
        ref
      },
      showList && /* @__PURE__ */ React.createElement(
        Frame,
        {
          position: "absolute",
          bottom: "42px",
          onClick: () => {
            toggleActiveStart(false);
            toggleShowList(false);
          }
        },
        list
      ),
        /* @__PURE__ */ React.createElement(
            WindowButton,
            {
                small: true,
                icon: /* @__PURE__ */ React.createElement("img", {
                    src: customLogo, // Use your custom logo here
                    alt: "Custom Logo", // Provide an alt text
                    width: "88", // Specify the width
                    height: "32" // Specify the height
                }),
                active: activeStart,
                onClick: () => {
                    toggleActiveStart(!activeStart);
                    toggleShowList(!showList);
                }
            },
            ""
        ),

      /* @__PURE__ */ React.createElement(Frame, { w: "100%", paddingLeft: "$0", ml: "$2", display: "flex" }, modalWindows.map(
        ({ icon, title, hasButton, id }) => hasButton && /* @__PURE__ */ React.createElement(
          WindowButton,
          {
            key: id,
            icon,
            active: id === activeWindow,
            onClick: () => {
              modals.emit(ModalEvents.ModalVisibilityChanged, { id });
            },
            small: false
          },
          /* @__PURE__ */ React.createElement("div", { className: truncate }, title)
        )
      )),
      /* @__PURE__ */ React.createElement(Clock, null)
    );
  }
);
export {
  TaskBar
};
