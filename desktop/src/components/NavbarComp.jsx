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
