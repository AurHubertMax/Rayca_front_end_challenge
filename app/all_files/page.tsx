import React, { Suspense } from 'react';

export default function AllFiles() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
            <div>
                all Files
            </div>
      </Suspense>
    );
}
  
