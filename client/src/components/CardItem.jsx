import { Link } from "react-router-dom";
import Chip from "./common/Chip";

const CardItem = ({
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
    <div className="flex flex-col blogItem-wrap">   
      <Link to={`/blog/${id}`}>
        <img className="w-full h-64 object-cover rounded-xl mb-2" src={cover} alt="cover" />
      </Link>
      {/* <img className='blogItem-cover' src={cover} alt='cover' /> */}
      <Chip label={category} />
      <h3 className="mb-4">{title}</h3>
      <p className="truncate max-h-16 mb-4">{description}</p>
      <footer className="flex items-center justify-between">
        <div className="flex items-center">
          {/* <img src={authorAvatar} alt='avatar' /> */}
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

export default CardItem;