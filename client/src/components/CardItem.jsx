import React from 'react';
// import BlogItem from './BlogItem';
// import './styles.css';

const CardItem = ({ blogs }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '3rem',
    }} className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default CardItem;
