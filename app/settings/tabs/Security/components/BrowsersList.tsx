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
            <div className="col-span-3 flex flex-row items-center gap-4">
                <div className="bg-gray-300 p-1 rounded-lg">
                    <Avatar className="max-w-7 max-h-7 items-center">
                        <AvatarImage src={browserIconSrc} alt="icon" />
                    </Avatar>
                </div>
                <div className="font-bold text-black">{browser}</div>
            </div>
            <div className="text-gray-500 text-sm flex justify-end items-center gap-1">
                <Avatar className="w-7 h-7">
                    <AvatarImage src={locationSrc} alt="icon" />
                </Avatar>
                {location}
            </div>
            <div className="text-gray-500 flex justify-end items-center">{lastUsed}</div>
            <div className="flex justify-end items-center">
                <Trash2 color="gray" strokeWidth={1} className="cursor-pointer" />
            </div>
            
        </div>
    );
}