'use client';

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import {Button} from "@/components/ui/button"
import { ExternalLink } from 'lucide-react';
import { Progress } from "@/components/ui/progress"



export default function StorageItem() {
    return ( 
        <Button variant="outline" size="default" className="flex flex-col w-full h-full rounded-lg items-start gap-5">
            <div className="flex flex-row justify-between w-full">
                <div className="font-bold text-sm text-textMain">Storage</div>
                <div className="hover:no-underline cursor-pointer underline text-sm text-textMain">Upgrade</div>

            </div>
            <div className="flex flex-col w-full h-full items-start gap-2">
                <Progress value={92} className="w-[100%] h-2" />
                <div className="text-sm text-textSemiMuted">9.2 GB of 10GB used</div>
            </div>
        </Button>
    );
}