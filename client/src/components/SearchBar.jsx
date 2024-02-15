import React from 'react';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='bg-[#EDF4E0] rounded p-2 w-max mx-auto my-10'>
    <form onSubmit={formSubmit} className='flex items-center'>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
        className='bg-[#EDF4E0] outline-none border-none'
      />
      {value && (
        <span onClick={clearSearch} className='pr-2 cursor-pointer'>
          X
        </span>
      )}
      <button className='bg-[#05396B] px-4 py-1 rounded text-[#EDF4E0]'>Go</button>
    </form>
  </div>
);

export default SearchBar;
