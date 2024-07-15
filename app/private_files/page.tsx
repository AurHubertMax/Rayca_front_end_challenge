import React, { Suspense } from 'react';

export default function PrivateFiles() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          private files
        </div>
      </Suspense>
    );
}
  
