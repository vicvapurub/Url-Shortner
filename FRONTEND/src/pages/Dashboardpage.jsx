import React from 'react'
import UrlForm from '../components/Urlform'
import UserUrl from '../components/UserUrl'

const DashboardPage = () => {
  return (
     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white mb-15 p-8 rounded-xl shadow-lg w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">URL Shortener</h1>
    <UrlForm/>
    <UserUrl />
      </div>
    </div>
  )
}

export default DashboardPage
