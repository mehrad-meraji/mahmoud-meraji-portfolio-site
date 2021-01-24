import React from 'react';
import BlockContent from "@sanity/block-content-to-react";
import cn from "classnames";
import {imageBuilder} from "../../lib/sanity";

export default function ArtworkBlock(props) {
  const { artwork: { dimensions, medium, title, totalPrice, year, picture: {asset, alt}}, layout} = props;
  let imageUrl;
  let classList = 'px-18 mt-18 text-block';
  if (!['imageOnLeft', 'imageOnRight'].includes(layout)) {
    imageUrl = imageBuilder(asset).url();
  }
  else {
    imageUrl = imageBuilder(asset).width(650).url()
    classList += ' flex'
  }
  
  return (
    <section className={classList}>
      <img
        className={cn('shadow-small')}
        src={imageUrl}
      />
      <div>
        <h3>{ title }</h3>
        <time>{ year }</time>
        <p>{ medium }</p>
        <p>{ dimensions }</p>
        <p>{ totalPrice }</p>
      </div>
    </section>
  );
}

