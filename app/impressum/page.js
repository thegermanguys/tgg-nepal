import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-center h-[600px] px-4 py-10">
        <div className="flex flex-col mb-10 text-xl text-left text-gray-800 dark:text-gray-200 w-fit gap-5">
          <h1 className="text-4xl font-semibold mb-8 text-center">Impressum</h1>
          <p>T. G. G. Ed Tech Consultancy Nepal</p>
          
          <p>Lumbini Cultural Municipality-12</p>
          <p>Rupandehi, Nepal</p>

          <p>Email: <a href="mailto:nepal@thegermanguy.org" className="underline">nepal@thegermanguy.org</a></p>
          <p>Fon: +977-9762739793</p>

          <p>Registration No: 385857/82/83</p>
          <p>PAN: 623551749</p>

          <p>Founder: Rakesh Chandra Srivastav</p>
          </div>
    </div>
  )
}

export default page;
