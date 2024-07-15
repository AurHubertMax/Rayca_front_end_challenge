'use client'

import { useEffect } from "react";
import { CommandDemo } from "../Command";
import { Button } from "./button";
import { Plus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck } from "lucide-react";


export default function Header() {
    const searchParams = useSearchParams();
    return (
        <div className="flex flex-row items-start justify-between pb-8">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-extrabold text-textMain">Mia de Silva</h1>
                <p className="text-sm text-textSemiMuted">{searchParams.get('desc')}</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <CommandDemo />
                <Button className="gap-2" variant="outline" size="default">
                    <Plus className="h-4 w-4" strokeWidth={2} /> Invite
                </Button>
                <Button className="text-textMain font-semibold" variant="secondary" size="default">
                    Upgrade
                </Button>
                <Avatar>
                    <AvatarImage src="https://randomuser.me/api/portraits/lego/1.jpg" alt="User Avatar" />
                </Avatar>
            </div>
            
        </div>
    );
}