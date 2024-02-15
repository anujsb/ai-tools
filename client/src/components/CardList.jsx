import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className="flex flex-col">
      <Link to={`/blog/${id}`}>
        <img className="w-full h-64 object-cover rounded-lg mb-2" src={cover} alt="cover" />
      </Link>
      <Chip label={category} />
      <h3 className="mb-4">{title}</h3>
      <p className="relative overflow-hidden max-h-16 text-sm text-gray-500 mb-4">{description}</p>
      <footer className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-2">
            <h6>Read Further</h6>
            <p>Click on the arrow</p>
          </div>
        </div>
        <Link className="text-3xl" to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
