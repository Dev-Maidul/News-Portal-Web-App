import React from 'react';
import { FaRegEye, FaStar } from 'react-icons/fa';
import { FaShareAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border border-base-300">
      <div className="card-header flex items-center justify-between p-4 border-b border-base-300 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="text-gray-400 cursor-pointer flex gap-2">
        <FaShareAlt size={24}/>
        <FaRegBookmark size={24}/>
        </button>
      </div>

      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold mb-2">
          {title}
        </h2>
        <figure>
          <img src={thumbnail_url} alt="News thumbnail" className="rounded" />
        </figure>
        <p className="text-sm text-gray-700 mt-3">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <span className="text-blue-500 cursor-pointer"> Read More</span>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      <div className="card-footer flex justify-between items-center p-4 border-t border-base-300">
        <div className="flex items-center gap-2 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? "text-orange-400" : "text-gray-300"} />
          ))}
          <span className="text-gray-600 font-medium ml-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaRegEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
