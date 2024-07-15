'use client'

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";


export default function Basics() {

    return(
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
                <div className="font-bold text-md text-textMain">Basics</div>
                <Separator />
            </div>
            
            <div className="grid grid-cols-3 gap-20">
                <div className="flex flex-col">
                    <div className="font-bold text-xs text-textMain">
                        Password
                    </div>
                    <div className="text-gray-400 text-xs text-textMuted font-semibold">
                        Set a password to protect your account
                    </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <Input disabled={false} type="password" placeholder="****************************************" className="w-[50%] border-0 bg-transparent placeholder-textMain"/>
                    <div className="flex flex-row items-center gap-1">
                        <CircleCheck color="#688f6e" strokeWidth={2} size={18}/>
                        <div className="text-xs text-textGreen font-medium tracking-tight">Very Secure</div>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="text-textMain">Edit</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit password</DialogTitle>
                                <DialogDescription>Make changes to your password here. Click save when you're done.</DialogDescription>
                            </DialogHeader>
                            <Input type="password" placeholder="Enter new password" className="w-full"/>
                            <DialogFooter>
                                <Button type="submit" variant="secondary">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <Separator />
            <div className="grid grid-cols-3 items-center gap-20">
                <div className="flex flex-col">
                    <div className="font-bold text-xs text-textMain">
                        Two-step verification
                    </div>
                    <div className="text-textMuted font-semibold text-xs text-wrap">
                        We recommend requiring a verification code in addition to your password.
                    </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <div>
                        <Switch 
                            id="two-step-verification" 
                            checked={true}
                        />
                    </div>
                    <div className="font-medium text-sm text-textMain">
                        Two-step verification
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <Button variant="outline" size="sm" className="text-textMain">Edit</Button>
                </div>
            </div>
            <Separator />
        </div>

    );
}