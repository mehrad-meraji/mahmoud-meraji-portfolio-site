import React from 'react';
import { imageBuilder } from '../../lib/sanity'
import cn from "classnames";

function HeroBlock({hero}) {
  const image = (
    <section className={ 'mb-18' }>
      <img
        className={cn('shadow-small bg-cover')}
        src={imageBuilder(hero).url()}
      />
    </section>
  )
  
  return image;
}

export default HeroBlock;
