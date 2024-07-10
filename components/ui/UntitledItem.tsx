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
            <div className="avatar rounded-lg h-7 w-7 bg-blue-300"></div>
            <div className="grow font-extrabold pl-1">Untitled UI</div>
            <HoverCard>
                <HoverCardTrigger>
                    <Button variant="link" size="sm" >
                        v4.0 
                        <ExternalLink size={15} className="ml-2"/>
                    </Button>
                </HoverCardTrigger>
            </HoverCard>
        </div>
        
    );
}