import React from 'react';
import BlockContent from "@sanity/block-content-to-react";
import cn from "classnames";
import {imageBuilder} from "../../lib/sanity";

export default function ArtworkBlock(props) {
  console.log(props)
  const { artwork: { picture: {asset, alt}}, layout} = props;
  return (
    <section className={ 'px-18 mt-18 text-block' }>
      <img
        className={cn('shadow-small')}
        src={imageBuilder(asset).url()}
      />
    </section>
  );
}

