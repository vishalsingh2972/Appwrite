import React from 'react';

const BlogCard = ({ title, author, metaDesc, readMoreLink, slug }) => {
  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-700 mt-2">{metaDesc}</p>
        <p className="text-gray-600 mt-1 text-sm font-bold">Author: {author}</p>
      </div>
      <div className="px-4 py-2 mt-2">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          <a href={readMoreLink}>Read More</a>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
