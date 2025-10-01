import React from 'react';
import { useLoaderData } from 'react-router';


const Bookdetils = () => {
    const detils = useLoaderData();
    console.log(detils);
    return (
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl flex gap-6 p-6 border mt-10">
            {/* Left Side (Book Image) */}
            <div className="w-1/3 flex justify-center">
                <img
                    src={detils.image}
                    alt="Book Cover"
                    className="rounded-lg shadow-md"
                />
            </div>

            {/* Right Side (Book Details) */}
            <div className="w-2/3 flex flex-col justify-between ">
                {/* Book Title and Author */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                       {detils.bookName}
                    </h2>
                    <p className="text-gray-600 mb-3">
                        By : <span className="font-semibold">{detils.author}</span>
                    </p>
                    <p className="text-sm text-gray-500 mb-4">{detils.category}</p>

                    {/* Review */}
                    <p className="text-gray-700 text-sm mb-4">
                        <span className="font-semibold">Review : </span>
                        {detils.review}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-3 mb-5">
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                            #{detils.tags[0]}
                        </span>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                            #{detils.tags[1]}
                        </span>
                    </div>
                </div>

                {/* Extra Info */}
                <div className="text-sm text-gray-700 space-y-1 mb-4">
                    <p>
                        <span className="font-semibold">Number of Pages:</span> {detils.totalPages}
                    </p>
                    <p>
                        <span className="font-semibold">Publisher:</span> {detils.publisher}
                    </p>
                    <p>
                        <span className="font-semibold">Year of Publishing:</span> {detils.yearOfPublishing}
                    </p>
                    <p>
                        <span className="font-semibold">Rating:</span> ⭐ {detils.rating}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition">
                        Read
                    </button>
                    <button className="bg-teal-500 text-white px-5 py-2 rounded-lg hover:bg-teal-600 transition">
                        Wishlist
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Bookdetils;