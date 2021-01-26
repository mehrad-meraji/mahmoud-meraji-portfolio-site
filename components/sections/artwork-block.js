import React, {useRef} from 'react';
import cn from "classnames";
import {imageBuilder} from "../../lib/sanity";
import {Waypoint} from "react-waypoint";
import Magnifier from "../magnifier";

export function currencyFormat(num) {
  return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default function ArtworkBlock(props) {
  let {
    artwork: {
      dimensions,
      medium,
      title,
      totalPrice,
      year,
      picture: {
        asset,
        alt
      }
    },
    layout,
    cta,
    backgroundColor,
    fullBleed,
    extraPadding,
    sold
  } = props;
  const price = currencyFormat(totalPrice);
  const blockRef = useRef(null);
  let imageUrl;
  let classList = cn(
    'block relative py-18',
    {
      'flex': ['imageOnLeft', 'imageOnRight'].includes(layout),
      'px-0': fullBleed,
      'px-18': !fullBleed && !extraPadding
    }
  );
  
  if (!['imageOnLeft', 'imageOnRight'].includes(layout)) {
    imageUrl = imageBuilder(asset).url();
  }
  else {
    imageUrl = imageBuilder(asset).width(650).url()
  }

  const image = imageUrl ? <Magnifier src={imageUrl} largeSrc={imageBuilder(asset).url()} zoom={3} className={cn(
    {
      'mb-18': ['imageOnTop'].includes(layout),
      'mt-18': ['imageOnBottom'].includes(layout),
      'px-42': extraPadding && !fullBleed
    }
  )}/> : null;
  title = title ? <h3 className={cn(
    'font-bold font-display mb-6', {
      'text-2xl': !['imageOnTop'].includes(layout),
      'text-6xl': ['imageOnTop'].includes(layout),
      'px-42': extraPadding
    })}>{ title }</h3> : null;
  year = year ? <time className="text-lg font-body mb-4">{ year }</time> : null;
  medium = medium ? <p className="text-lg font-body mb-4">{ medium }</p> : null;
  dimensions = dimensions ? <p className="text-lg font-body mb-4">{ dimensions }</p> : null;
  totalPrice = totalPrice ? <p className="text-lg font-body">{ price }</p> : null;
  cta = cta && !sold ? <a className="border border-solid border-gray-500 min-w-52 h-16 mt-6 flex items-center justify-center text-lg font-body" href={cta.url}>{cta.label}</a> : null;
  sold = sold ? <p className="text-lg font-display mt-6">Sold</p> : null;
  const color = backgroundColor ? {backgroundColor: backgroundColor.hex} : null;
  return (
    <section ref={blockRef} style={ color} className={classList}>
      <Waypoint
        bottomOffset='10%'
      />
      { ['imageOnTop'].includes(layout) ? title : null }
      { image }
      <div className={cn(
        'flex-shrink-0 min-w-80 flex flex-col justify-center items-start',
        {
          'ml-20': !extraPadding,
          'px-42': extraPadding
        }
      )}>
        { !['imageOnTop'].includes(layout) ? title : null }
        { year }
        { medium }
        { dimensions }
        { totalPrice }
        { cta }
        { sold }
      </div>
    </section>
  );
}

