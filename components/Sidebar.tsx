'use client'

import UntitledItem from "./ui/UntitledItem";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import React from "react";
import StorageItem from "./ui/StorageItem";
import Link from "next/link";
import FileBrowser from "./ui/File-browser";
import NotificationIcon from "./ui/NotificationIcon";

import { Home } from "lucide-react";
import { Folder } from "lucide-react";
import { FolderLock } from "lucide-react";
import { Users } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Contrast } from "lucide-react";
import { MessageSquareDot } from "lucide-react";
import { Settings } from "lucide-react";
import { ChevronRight } from "lucide-react";

const col = "#8c8c8e"

const menuList = [
    {
        group: "",
        items: [
            {
                link: "/", 
                text: "Home", 
                desc: "This is the Home Page",
                icon: <Home color={col} strokeWidth={1}/>
            },
            {
                link: "/all_files", 
                text: "All files", 
                desc: "Manage files and folders here",
                icon: <Folder color={col} strokeWidth={1}/>
            },
            {
                link: "/private_files", 
                text: "Private files", 
                desc: "Manage your private files here",
                icon: <FolderLock color={col} strokeWidth={1}/>
            },
            {
                link: "/shared_with_me", 
                text: "Shared with me", 
                desc: "See files shared with you here",
                icon: <Users color={col} strokeWidth={1}/>
            },
            {
                link: "/deleted_files", 
                text: "Deleted files", 
                desc: "Manage deleted files here",
                icon: <Trash2 color={col} strokeWidth={1}/>
            },
            {
                link: "/design", 
                text: "Design", 
                desc: "Start designing here",
                icon: <Contrast color={col} strokeWidth={1}/>
            },
            {
                link: "/notifications", 
                text: "Notifications", 
                desc: "Manage notifications here",
                icon: <MessageSquareDot color={col} strokeWidth={1}/>
            },
            {
                link: "/settings", 
                text: "Settings", 
                desc: "Manage your details and personal preferences here",
                icon: <Settings color={col} strokeWidth={1}/>
            },
        ]
    },
]
  

export default function Sidebar() {
    return (
        <div className=" flex flex-col gap-1 w-[300px] min-w-[300px] min-h-screen p-5" style={{backgroundColor: "var(--background)"}}>
            <div className="pb-8">
                <UntitledItem />
            </div>
            <div className="grow font-bold">
                <Command >
                    <CommandList >
                        {menuList.map((menu: any, key: number) => (
                            <React.Fragment key={key}>
                                <CommandGroup key={key} heading={menu.group}>
                                    {menu.items.map((option: any, optionKey: number) => 
                                    <Link key={optionKey} href={{
                                        pathname: option.link,
                                        query: {
                                            desc: option.desc
                                        }
                                        }} >
                                        {optionKey === 6 ? (<CommandItem key={optionKey} className="flex cursor-pointer" >
                                            <div className="flex w-full gap-2">
                                                {option.icon}
                                                {option.text}
                                            </div>
                                            <div className="flex justify-end w-full pr-3">
                                                <NotificationIcon />
                                            </div>
                                        </CommandItem>) : (
                                        <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                                            {option.icon}
                                            {option.text}
                                        </CommandItem>
                                        )}
                                    </Link>
                                    )}
                                </CommandGroup>
                                {key === 0 && <div style={{ height: '20px' }}></div>}
                            </React.Fragment>
                        ))}
                    </CommandList>
                        <CommandGroup heading={
                            <div className="flex align-center justify-between items-center text-textMuted">
                                FILE BROWSER
                                <FileBrowser />
                            </div>
                        } >
                            <CommandItem className="flex gap-2 cursor-pointer">
                                <ChevronRight color="gray" strokeWidth={1}/>
                                Folders
                            </CommandItem>
                        </CommandGroup>
                </Command>
                
            </div>
            <div className="">
                <StorageItem />
            </div>

        </div>
    );
}