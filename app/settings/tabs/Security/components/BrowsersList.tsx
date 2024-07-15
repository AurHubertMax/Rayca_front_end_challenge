'use client'

import React from "react";
import { Trash2 } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";

interface BrowserItemProps {
    browser: string;
    location: string;
    locationSrc: string;
    lastUsed: string;
    browserIconSrc: string;
}



export default function BrowserItem({ browser, location, locationSrc, lastUsed, browserIconSrc }: BrowserItemProps) {
    return (
        <div className="grid grid-cols-6">
            <div className="col-span-3 flex flex-row items-center gap-3">
                <div className="bg-iconbg p-1 rounded-lg">
                    <Avatar className="max-w-6 max-h-6 items-center shadow-2xl">
                        <AvatarImage src={browserIconSrc} alt="icon" />
                    </Avatar>
                </div>
                <div className="font-bold text-textMain text-sm">
                    {browser}
                </div>
            </div>
            <div className=" flex justify-end items-center gap-1">
                <Avatar className="w-6 h-6">
                    <AvatarImage src={locationSrc} alt="icon" />
                </Avatar>
                <div className="text-textMuted font-semibold text-xs">
                    {location}
                </div>
            </div>
            <div className="text-textMuted text-xs font-semibold flex justify-end items-center">
                {lastUsed}
            </div>
            <div className="flex justify-end items-center">
                <Trash2 color="gray" strokeWidth={1} className="cursor-pointer" />
            </div>
            
        </div>
    );
}