import React, { Suspense } from 'react';

export default function DeletedFiles() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          deleted files
        </div>
      </Suspense>
      
    );
}
  
