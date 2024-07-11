'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { EllipsisVertical } from "lucide-react"

export default function FileBrowser() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="link" size="sm" className="flex items-center">
                    <EllipsisVertical className="text-gray-400 size-4 "/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <span>Option 1</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>Option 2</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>Option 3</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <span>Option 4</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>Option 5</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>Option 6</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
);
}