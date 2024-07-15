'use client'

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {CircularProgress} from "@nextui-org/progress";
import { useState } from "react";

export default function SecurityAlert() {
    const [dismiss, setDismiss] = useState(true);
    return(
        dismiss ? (<Alert variant="default" className="grid grid-cols-2 w-full"> 
            <div className="flex flex-row gap-3">
                <CircularProgress classNames={{
                    svg: 'w-12 h-12',
                    indicator: 'stroke-cprogressIndicator',
                    track: 'stroke-cprogressTrack'
                }} 
                value={80}
                strokeWidth={4}
                showValueLabel={false}/>
                <div className="flex flex-col justify-center">
                    <AlertTitle>Your account security is 90%</AlertTitle>
                    <AlertDescription>
                        Please review your account security settings regularly and update your password.
                    </AlertDescription>
                </div>
            </div>
            
            <div className="grid grid-flow-col justify-end min-w-full gap-2">
                <Button className="text-textMain font-semibold" variant="outline" size="sm" onClick={() => setDismiss(false)} >Dismiss</Button>
                <Button className="text-textMain font-semibold" variant="secondary" size="sm" >Review Security</Button>
            </div>
        </Alert>) : null
    );
}