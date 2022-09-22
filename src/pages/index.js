import React, { lazy, Suspense } from 'react';

const ThreeLazy = lazy(() => import('../components/three-lazy'));

const Page = () => {
  return (
    <main>
      <Suspense fallback={<h1>Loading</h1>}>
        <ThreeLazy />
      </Suspense>
    </main>
  );
};

export default Page;
