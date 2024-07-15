import React, { Suspense } from 'react';
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Button variant="outline">HomePage</Button>
      </div>
    </Suspense>
  );
}
