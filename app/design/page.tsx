import React, { Suspense } from 'react';

export default function Design() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          design
        </div>
      </Suspense>
    );
}
  
