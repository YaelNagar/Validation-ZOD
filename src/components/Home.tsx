import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">פרטים אישיים</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">שם פרטי</label>
          <input
            type="text"
            placeholder="שם פרטי"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">שם משפחה</label>
          <input
            type="text"
            placeholder="שם משפחה"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">תעודת זהות</label>
          <input
            type="text"
            placeholder="תעודת זהות"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">תאריך לידה</label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">פרטי התקשרות</h2>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">דואל</label>
          <input
            type="email"
            placeholder="כתובת דואל"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          שלח
        </button>
      </form>
    </div>
  );
}

export default Home;
