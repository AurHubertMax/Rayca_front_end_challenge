import React, { Suspense } from 'react';

export default function SharedWithMe() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          shared with me
        </div>
      </Suspense>
    );
}
