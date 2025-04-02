import { useState } from "react";
import { Link } from "react-router-dom";

function BlogCard({id, image, category, title, description, author, date, authorImage}) {
    const [expandToggle, setExpandToggle] = useState(false);

    return (
      //Big Box
      <div className="flex flex-col gap-4">
        {/* Image */}
        <Link to={`/post/${id}`} className="relative md:h-90 h-50" rel="noopener noreferrer">
          <img 
            className="w-full h-full object-cover rounded-md" 
            src={image}
            alt={title}/>
        </Link>

        {/* Lower Box */}
        <div className="flex flex-col">
          {/* Category */}
          <div className="flex">
            <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
              {category} 
            </span>
          </div>

          {/* Title */}
          <Link to={`/post/${id}`} rel="noopener noreferrer">
            <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {title}
            </h2>
          </Link>

          {/* Description */}
          <div className="text-muted-foreground text-sm mb-4 flex-grow">
            <p className={expandToggle ? "" : "line-clamp-1"}>{description}</p>
              {description.length > 100 && (
              <button
                onClick={() => setExpandToggle(!expandToggle)}
                className="text-blue-500 hover:text-blue-300 underline mt-1 cursor-pointer"
              >
                {expandToggle ? "Shorten" : "Continue reading"}
              </button>
            )}
          </div>
          
          {/* Author */}
          <div className="flex items-center text-sm">
            <img className="w-8 h-8 rounded-full mr-2" src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" alt={author} />
            <span>
                {author}
            </span>
            <span className="mx-2 text-gray-300">|</span>
            <span>
                {date}
            </span>
          </div>
        </div>
      </div>
    );
   }

export default BlogCard;
   