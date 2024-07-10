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
        <Button variant="outline" className="flex flex-col w-full h-full rounded-lg items-start gap-4">
            <div className="flex flex-row justify-between w-full">
                <div className="font-extrabold">Storage</div>
                <div className="hover:no-underline cursor-pointer underline">Upgrade</div>

            </div>
            <Progress value={92} className="w-[100%] h-2" />
            <div>9.2 GB of 10GB used</div>

        </Button>
    );
}