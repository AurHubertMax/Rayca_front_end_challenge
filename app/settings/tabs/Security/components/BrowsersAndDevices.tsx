'use client'

import { Separator } from "@/components/ui/separator";
import BrowserItem from "./BrowsersList";
import BraveSVG from "@/public/brave.svg";
import AppleSVG from "@/public/apple.svg";

//mexico flag: https://icons8.com/icon/UFGk2vu5rEkt/mexico
//vietnam flag: https://img.icons8.com/?size=100&id=2egPD0I7yi4-&format=png&color=000000

export default function BrowsersAndDevices() {
    return(
        <div className="flex flex-col justify-start gap-8">
            <div className="flex flex-col gap-2">
                <div className="font-bold text-lg">
                    Browsers and devices 
                </div>
                <div className="text-sm text-gray-400">
                    These browsers and devices are currently signed in to your account. Remove any anautharized devices.
                </div>
            </div>
            <Separator />
            <BrowserItem
                browser="Brave on Mac OS X"
                location="Ninh Binh, Vietnam"
                locationSrc="https://img.icons8.com/?size=100&id=2egPD0I7yi4-&format=png&color=000000"
                lastUsed="Current session"
                browserIconSrc={BraveSVG.src}
            />
            <Separator />
            <BrowserItem
                browser="Mia's MacBook Pro"
                location="Ninh Binh, Vietnam"
                locationSrc="https://img.icons8.com/?size=100&id=2egPD0I7yi4-&format=png&color=000000"
                lastUsed="Current session"
                browserIconSrc={AppleSVG.src}
            />
        </div>
    );
}