import CardItem from './CardItem';

const Cardlist = ({ blogs }) => {
  return (
    <div className='grid grid-cols-3 gap-12 md:grid-cols-2 sm:grid-cols-1'>
      {blogs.map((blog) => (
        <CardItem blog={blog} />
      ))}
    </div>
  );
};

export default Cardlist;