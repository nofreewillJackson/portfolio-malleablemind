import React, { useState, useEffect } from "react";
import { Frame } from "../Frame/Frame.mjs";
import { Tooltip } from "../Tooltip/Tooltip.mjs";
import { tooltip } from "./TaskBar.css.mjs";

const Clock = () => {
    const [timer, setTimer] = useState("");

    useEffect(() => {
        function formatTime(hours, minutes) {
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return `${hours}:${minutes} ${ampm}`;
        }

        const interval = setInterval(() => {
            const today = new Date();
            const h = today.getHours();
            const m = today.getMinutes();
            setTimer(formatTime(h, m));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return React.createElement(
        Frame,
        {
            boxShadow: "$in",
            px: "$6",
            py: "$2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        React.createElement(Tooltip, { className: tooltip }, timer)
    );
};

export { Clock };
