import React from 'react'

const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-rose-300 transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden`}>
        <div className="p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Items */}
          <nav className="mt-8 space-y-4">
            <div className="flex items-center text-white py-3 border-b border-white border-opacity-30">
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-lg font-medium">Add Account</span>
            </div>
            
            <div className="flex items-center text-white py-3 border-b border-white border-opacity-30">
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-lg font-medium">Gold Jewellery</span>
            </div>
            
            <div className="flex items-center text-white py-3 border-b border-white border-opacity-30">
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-lg font-medium">Silver Jewellery</span>
            </div>
            
            <div className="flex items-center text-white py-3 border-b border-white border-opacity-30">
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-lg font-medium">Trending Collection</span>
            </div>
            
            <div className="flex items-center text-white py-3 border-b border-white border-opacity-30">
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-lg font-medium">Gifts</span>
            </div>
            
            <div className="flex items-center text-white py-3 border-b border-white border-opacity-30">
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-lg font-medium">Shop by Occasion</span>
            </div>
          </nav>

          {/* Login/SignUp Button */}
          <div className="mt-8">
            <button className="w-full bg-white text-gray-800 py-3 px-4 rounded-md font-medium flex items-center justify-center">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login / SignUp
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileSidebar
