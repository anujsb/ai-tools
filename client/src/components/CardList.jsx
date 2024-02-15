import CardItem from './CardItem';

const Cardlist = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <CardItem blog={blog} />
      ))}
    </div>
  );
};

export default Cardlist;