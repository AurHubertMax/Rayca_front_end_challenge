'use client'

import { useState } from "react";
import SecurityAlert from "./components/SecurityAlert";
import Basics from "./components/Basics";
import BrowsersAndDevices from "./components/BrowsersAndDevices";




export default function Security() {
    const [dismiss, setDismiss] = useState(true);

    return (
        <div className="flex flex-col pt-7 gap-6">
            <SecurityAlert />
            <Basics />
            <BrowsersAndDevices />
        </div>

    );
}