import React from 'react'

function TableData({ user }) {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="#" className="block relative">
              <img alt="profil" src={user.picture.medium} className="mx-auto object-cover rounded-full h-10 w-10 "/>
            </a>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              { `${user.name.first} ${user.name.last}` }
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          { user.gender }
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          { user.email }
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          { user.phone }
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          { `${user.location.city}, ${user.location.country}` }
        </p>
      </td>
    </tr>
  )
}

export default TableData