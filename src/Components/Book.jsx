import React from 'react';

const Book = ({ bdata }) => {

    return (
        <div>
            <div className="max-w-xs rounded-2xl shadow-md border p-4 space-y-3">
                {/* Book Image */}
                <div className="flex justify-center bg-gray-200 py-5 rounded-2xl">
                    <img
                        src={bdata.image}
                        alt="Book cover"
                        className="h-40 object-contain rounded-2xl"
                    />
                </div>

                {/* Tags */}
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                        Young Adult
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                        Identity
                    </span>
                </div>

                {/* Title & Author */}
                <div>
                    <h3 className="text-lg font-bold text-gray-800">
                        The Catcher in the Rye
                    </h3>
                    <p className="text-gray-500 text-sm">By : Awlad Hossain</p>
                </div>

                {/* Category & Price */}
                <div className="flex items-center justify-between border-t pt-2">
                    <span className="text-gray-600 text-sm">Fiction</span>
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">5.00</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.8}
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500 cursor-pointer hover:text-yellow-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.402c.497.036.699.646.302.97l-4.204 3.47a.563.563 0 00-.182.557l1.325 5.385c.12.49-.408.868-.833.61l-4.725-2.868a.563.563 0 00-.586 0l-4.725 2.868c-.425.258-.953-.12-.833-.61l1.325-5.385a.563.563 0 00-.182-.557L2.54 10.327c-.397-.324-.195-.934.302-.97l5.518-.402a.563.563 0 00.475-.345l2.125-5.111z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Book;