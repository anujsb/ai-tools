import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../config/data";
import Chip from "../components/common/Chip";
import EmptyList from "../components/common/EmptyList";
// import "./styles.css";
import { Link } from "react-router-dom";

const Card = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className="text-gray-600 text-sm font-medium" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="max-w-700 mx-auto">
          <header>
            <p className="text-xs text-gray-600 font-medium">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
          <p className="blog-desc">{blog.SecondPara}</p>
          <p className="blog-desc">{blog.ThirdPara}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Card;















// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { blogList } from "../../config/data";
// import Chip from "../../components/common/Chip";
// import EmptyList from "../../components/common/EmptyList";
// import { Link } from "react-router-dom";

// const Blog = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     let blog = blogList.find((blog) => blog.id === parseInt(id));
//     if (blog) {
//       setBlog(blog);
//     }
//   }, []);

//   return (
//     <>
//       <Link className="text-gray-600 text-sm font-medium" to="/">
//         <span className="">&#8592;</span> <span className="">Go Back</span>
//       </Link>
//       {blog ? (
//         <div className="max-w-700 mx-auto">
//           <header className="text-center">
//             <p className="text-xs text-gray-600 font-medium">Published {blog.createdAt}</p>
//             <h1 className="text-2xl">{blog.title}</h1>
//             <div className="flex justify-center">
//               {blog.subCategory.map((category, i) => (
//                 <div key={i} className="m-4">
//                   <Chip label={category} />
//                 </div>
//               ))}
//             </div>
//           </header>
//           <img className="w-full" src={blog.cover} alt="cover" />
//           <p className="p-4 mt-6">{blog.description}</p>
//           <p className="p-4">{blog.SecondPara}</p>
//           <p className="p-4">{blog.ThirdPara}</p>
//         </div>
//       ) : (
//         <EmptyList />
//       )}
//     </>
//   );
// };

// export default Blog;
