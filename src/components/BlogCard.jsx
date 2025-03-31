function BlogCard({image, category, title, description, author, date, authorImage}) {
    const formatDate = new Date(date).toLocaleString("th-TH", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return (
      <div className="flex flex-col gap-4">
        <a href="#" className="relative md:h-90 h-50">
          <img 
            className="w-full h-full object-cover rounded-md" 
            src={image}
            alt={title}/>
        </a>
        <div className="flex flex-col">
          <div className="flex">
            <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
                {category}
            </span>
          </div>
          <a href="#" >
            <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {title}
            </h2>
          </a>
          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
            {description}
          </p>
          <div className="flex items-center text-sm">
            <img className="w-8 h-8 rounded-full mr-2" src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" alt={author} />
            <span>
                {author}
            </span>
            <span className="mx-2 text-gray-300">|</span>
            <span>
                {formatDate}
            </span>
          </div>
        </div>
      </div>
    );
   }

export default BlogCard;
   