import React from 'react'

function ContactUs() {
  return (
    <div>
      <div className="flex">
        <div className="bg-gray-800 p-3 text-gray-200 rounded-lg">
          <p className="font-semibold text-2xl">Contact Us</p>
        </div>
      </div>
      <div className="mt-10 p-10 bg-gray-100 shadow-sm rounded-xl">
        <h1 className="font-bold text-2xl mb-5">Head Office</h1>
        <div className="mb-5 w-9/12 space-x-4 flex justify-start items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="font-sans font-bold">PT. Qlue Performa Indonesia</p>
            <p className="font-sans">Jalan Pejaten Barat No. 13,RT.1/RW.8, Pejaten Barat, Kota Jakarta Selatan, DKI Jakarta, 12510</p>
          </div>
        </div>
        <div className="shadow-xl">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe className="w-full h-96" id="gmap_canvas" title="gmap" src="https://maps.google.com/maps?q=PT.%20Qlue%20Performa%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs