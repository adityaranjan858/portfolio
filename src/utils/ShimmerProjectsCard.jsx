import React from "react";

const ShimmerProjectsCard = () => {
  return (
    <section className="bg-gray-900 text-white  flex items-center justify-center px-6 py-12">
    <div className="border border-gray-700 rounded-3xl p-4 bg-gray-800 animate-pulse space-y-4 flex flex-col justify-between">
      <div className="w-full h-44 bg-gray-600 rounded-2xl"></div>

      <div className="h-6 bg-gray-600 rounded w-3/4"></div>


      <div className="flex gap-2 mt-2">
        <div className="h-4 bg-gray-600 rounded w-12"></div>
        <div className="h-4 bg-gray-600 rounded w-16"></div>
        <div className="h-4 bg-gray-600 rounded w-10"></div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="h-10 bg-gray-600 rounded-3xl w-28"></div>
        <div className="h-10 bg-gray-600 rounded-3xl w-28"></div>
      </div>
    </div>
    </section>
  );
};

export default ShimmerProjectsCard;
