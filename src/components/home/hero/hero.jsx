import React, { useState } from 'react';
import { hero } from '../../../dummydata';
import { blogList } from '../../../dummydata';
import Card from './Card';
import './hero.css';

const Hero = () => {
  const [items, setItems] = useState(blogList.slice(0,4)); // extract first four items

  return (
    <section className='hero'>
      <div className='container'>
        {items.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Hero;
