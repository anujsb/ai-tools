import CardItem from './CardItem';

const Cardlist = ({ blogs }) => {
  return (
    <div className='grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2'>
      {blogs.map((blog) => (
        <CardItem blog={blog} />
      ))}
    </div>
  );
};

export default Cardlist;