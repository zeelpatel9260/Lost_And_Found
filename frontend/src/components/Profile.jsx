import React, { useState } from "react";
import { 
  User, 
  CalendarBlank, 
  MapPin, 
  CaretRight 
} from "@phosphor-icons/react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("lost");

  // Mock data based on the provided image
  const mockLostItems = [
    {
      id: 1,
      title: "Black Backpack",
      type: "Lost",
      date: "12 Sep 2025",
      location: "SCET Campus",
      image: "https://via.placeholder.com/150/333333/FFFFFF?text=Backpack" 
    },
    {
      id: 2,
      title: "iPhone 13",
      type: "Lost",
      date: "10 Sep 2025",
      location: "Library, SCET",
      image: "https://via.placeholder.com/150/000000/FFFFFF?text=Phone"
    },
    {
      id: 3,
      title: "Wallet",
      type: "Lost",
      date: "07 Sep 2025",
      location: "Canteen, SCET",
      image: "https://via.placeholder.com/150/5C4033/FFFFFF?text=Wallet"
    }
  ];

  const mockFoundItems = [
    {
      id: 4,
      title: "Water Bottle",
      type: "Found",
      date: "14 Sep 2025",
      location: "Room 204, SCET",
      image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Bottle"
    }
  ];

  const currentItems = activeTab === "lost" ? mockLostItems : mockFoundItems;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-sm border border-gray-100 p-8">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-[#1e293b] mb-8">Profile</h1>

        {/* User Info Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-[#5b61f4] rounded-full flex items-center justify-center text-white shadow-md">
              <User size={48} weight="fill" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Patel XYZ</h2>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">Patel@gmail.com</p>
            </div>
          </div>
          <button className="border-2 border-indigo-100 text-[#5b61f4] font-semibold px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
            Edit Profile
          </button>
        </div>

        {/* My Posts Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">My Posts</h2>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab("lost")}
              className={`flex-1 pb-3 text-center font-medium text-sm sm:text-base transition-colors ${
                activeTab === "lost" 
                  ? "text-[#5b61f4] border-b-2 border-[#5b61f4]" 
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Lost Items
            </button>
            <button
              onClick={() => setActiveTab("found")}
              className={`flex-1 pb-3 text-center font-medium text-sm sm:text-base transition-colors ${
                activeTab === "found" 
                  ? "text-[#5b61f4] border-b-2 border-[#5b61f4]" 
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Found Items
            </button>
          </div>

          {/* Items List */}
          <div className="flex flex-col gap-2">
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center justify-between p-3 sm:p-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Item Image */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-gray-100 shadow-sm"
                    />
                    
                    {/* Item Details */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{item.title}</h3>
                        <span className={`text-[10px] sm:text-xs font-bold px-2 py-1 rounded-md ${
                          item.type === 'Lost' 
                            ? 'bg-red-100 text-red-500' 
                            : 'bg-green-100 text-green-600'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mt-1">
                        <CalendarBlank size={16} weight="regular" />
                        <span>{item.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                        <MapPin size={16} weight="regular" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Arrow */}
                  <div className="text-gray-400 group-hover:text-gray-700 transition-colors pr-2">
                    <CaretRight size={24} />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-gray-400">
                No {activeTab} items posted yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}