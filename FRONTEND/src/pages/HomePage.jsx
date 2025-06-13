import React from 'react'
import UrlForm from '../components/UrlForm'


const HomePage = () => {
  return (
   <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">URL Shortener</h1>
    <UrlForm />
      </div>
    </div>
  )
}

export default HomePage
