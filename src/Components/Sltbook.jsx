import React from 'react';

const Sltbook = ({item}) => {
    console.log(item);
    const {author, bookName, category, image, publisher, rating, tags, totalPages, yearOfPublishing} = item;
    return (
        <div className="max-w-10/12 h-[280px] mx-auto bg-white rounded-2xl shadow border p-5 flex items-center gap-6 mt-9">
            {/* Book Image */}
            <div className="w-32 flex-shrink-0">
                <img
                    src={image}
                    alt="Book Cover"
                    className="rounded-md shadow-md"
                />
            </div>

            {/* Book Details */}
            <div className="flex-1">
                {/* Title + Author */}
                <h2 className="text-xl font-bold text-gray-800">{bookName}</h2>
                <p className="text-gray-600 text-sm mb-3">
                    By : <span className="font-medium">{author}</span>
                </p>

                {/* Tags */}
                <div className="flex gap-2 mb-3">
                    <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                        #{tags[0]}
                    </span>
                    <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                        #{tags[1]}
                    </span>
                </div>

                {/* Info */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-3">
                    <p>📍 Year of Publishing: <span className="font-medium">{yearOfPublishing}</span></p>
                    <p>👥 Publisher: <span className="font-medium">{publisher}</span></p>
                    <p>📄 Page <span className="font-medium">{totalPages}</span></p>
                </div>

                <hr className="my-3" />

                {/* Bottom Section */}
                <div className="flex flex-wrap items-center gap-4">
                    <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                        Category: {category}
                    </span>
                    <span className="bg-orange-100 text-orange-500 text-sm px-3 py-1 rounded-full">
                        Rating:{rating}
                    </span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition text-sm">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sltbook;