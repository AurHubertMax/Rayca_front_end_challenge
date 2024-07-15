'use client'

import { Separator } from "@/components/ui/separator";
import BrowserItem from "./BrowsersList";
import BraveSVG from "@/public/brave.svg";
import AppleSVG from "@/public/apple.svg";

//mexico flag: https://img.icons8.com/?size=100&id=UFGk2vu5rEkt&format=png&color=000000
//vietnam flag: https://img.icons8.com/?size=100&id=2egPD0I7yi4-&format=png&color=000000

export default function BrowsersAndDevices() {
    return(
        <div className="flex flex-col justify-start gap-5">
            <div className="flex flex-col">
                <div className="font-bold text-md text-textMain">
                    Browsers and devices 
                </div>
                <div className="text-xs text-textMuted font-semibold">
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
            /><Separator />
            <BrowserItem
                browser="Brave on Mac OS X"
                location="Mexico City, Mexico"
                locationSrc="https://img.icons8.com/?size=100&id=UFGk2vu5rEkt&format=png&color=000000"
                lastUsed="1 month ago"
                browserIconSrc={BraveSVG.src}
            />
            <Separator />
            <BrowserItem
                browser="Mia's MacBook Pro"
                location="Mexico City, Mexico"
                locationSrc="https://img.icons8.com/?size=100&id=UFGk2vu5rEkt&format=png&color=000000"
                lastUsed="1 month ago"
                browserIconSrc={AppleSVG.src}
            />
            <Separator />
        </div>
    );
}