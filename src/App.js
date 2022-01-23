import React, { lazy, Suspense } from 'react';

const Filter = lazy(() => import('./components/filter'))
const CompanyList = lazy(() => import('./pages/companyList'))

function App() {
  return <>
    <Suspense fallback={<></>}>
      <section className='company-site-container'>
        <Filter />
        <CompanyList />
      </section>
    </Suspense>
  </>
}

export default App;
