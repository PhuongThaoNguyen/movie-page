import React from 'react';
import { Chapters } from '@Components/Chapters';
import { MainBox } from '@Components/MainBox';
import { PricingAndPromote } from '@Components/PricingAndPromote';

export const LeftContent = () => {
  return (
    <div className='wrapper'>
      <MainBox />
      <PricingAndPromote />
      <Chapters />
    </div>
  );
};
