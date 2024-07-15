'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Security from "./tabs/Security/Security";


export default function Settings() {
    return (
      <Tabs defaultValue="Security" className="w-full" >
        <TabsList>
          <TabsTrigger value="general" >General</TabsTrigger>
          <TabsTrigger value="Security">Security</TabsTrigger>
          <TabsTrigger value="Billing">Billing</TabsTrigger>
          <TabsTrigger value="Notifications">Notifications</TabsTrigger>
          <TabsTrigger value="Apps">Apps</TabsTrigger>
          <TabsTrigger value="Branding">Branding</TabsTrigger>
          <TabsTrigger value="Refer a friend">Refer a friend</TabsTrigger>
          <TabsTrigger value="Sharing">Sharing</TabsTrigger>
        </TabsList>
        <TabsContent value="Security">
          <Security />
        </TabsContent>
      </Tabs>
    );
}
  