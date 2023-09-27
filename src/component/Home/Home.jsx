import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';

const Home = () => {
  const [searchCategory, setSearchCategory] = useState('');

  // Callback function to handle search and update searchCategory state
  const handleSearch = (category) => {
    setSearchCategory(category);
  };

  return (
    <div>
      <Banner onSearch={handleSearch}></Banner>
      <Card searchCategory={searchCategory}></Card>
    </div>
  );
};

export default Home;
