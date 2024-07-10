'use client';

import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react"
  
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { useState } from "react"
  
export function CommandDemo() {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Command className="rounded-lg border ">
        <CommandInput placeholder="Search" />
        <CommandList>
            <CommandGroup>
            {open && <CommandItem />}
            </CommandGroup>
        </CommandList>
        </Command>
    )
}
  