'use client'

import { useEffect } from "react";
import { CommandDemo } from "../Command";
import { Button } from "./button";
import { Plus } from "lucide-react";
import { useSearchParams } from "next/navigation";


export default function Header() {
    const searchParams = useSearchParams();
    return (
        <div className="flex flex-row items-start justify-between pb-10">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-extrabold">Mia de Silva</h1>
                <p className="text-sm">{searchParams.get('desc')}</p>
            </div>
            <div className="flex flex-row gap-3">
                <CommandDemo />
                <Button className="gap-2">
                    <Plus className="h-4 w-4" strokeWidth={2} /> Invite
                </Button>
                <Button className="" variant="secondary">
                    Upgrade
                </Button>
                <div className="h-full w-20 overflow-hidden rounded-full">
                    <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="User Avatar" className="h-full" />
                </div> 
            </div>
            
        </div>
    );
}