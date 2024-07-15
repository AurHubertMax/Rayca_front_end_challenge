import React, { Suspense } from 'react';

export default function Notifications() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          notifications
        </div>
      </Suspense>
    );
}
  
