'use client';

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import {Button} from "@/components/ui/button"
import { ExternalLink } from 'lucide-react';


export default function UntitledItem() {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="ml-2 avatar rounded-md h-7 w-7 bg-uitembg flex items-center justify-center">
                <div className="absolute rounded-full bg-uitemCircle2 w-2 h-2 -ml-2.5 mt-1" />
                <div className="absolute rounded-full bg-uitemCircle1 w-3 h-3 ml-1" />
                
            </div>
            <div className="grow font-extrabold pl-1 text-textMain">Untitled UI</div>
            <HoverCard>
                <HoverCardTrigger>
                    <Button className="text-textSemiMuted" variant="link" size="sm" >
                        v4.0 
                        <ExternalLink size={15} className="ml-1"/>
                    </Button>
                </HoverCardTrigger>
            </HoverCard>
        </div>
        
    );
}