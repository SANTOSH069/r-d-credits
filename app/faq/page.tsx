import React from 'react'

const Faq = () => {
  return (
    <div className='w-full h-auto mx-auto'>
        <div className='flex flex-col space-y-1 font-sans '>
            <section className='bg-blue-400/35'>
            <h1 className='scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance pt-6'>
                Tax Credits FAQ
            </h1>
            <div className='flex flex-col  mx-auto max-w-2xl text-center font-medium'>
            <h2 className='scroll-m-20  text-lg font-medium tracking-tight first:mt-0'>
                Here you’ll find answers to the most common questions about
            </h2>
            <h2 className='scroll-m-20  text-lg font-medium tracking-tight first:mt-0 pb-6'>
                SR&ED, CDAE, and IDMTC across Globe.
            </h2>
            </div>
            </section>
        </div>

    </div>
  )
}

export default Faq