import React, {useRef, useState} from 'react';
import anime from 'animejs';
import BlockContent from "@sanity/block-content-to-react";
import cn from "classnames";
import {imageBuilder} from "../../lib/sanity";
import {Waypoint} from "react-waypoint";
import {useScrollDirection} from "../../hooks/scrollDirectionHook";

export function currencyFormat(num) {
  return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default function ArtworkBlock(props) {
  const [animationState, setAnimationState] = useState(null)
  const scrollDirection = useScrollDirection()
  let { artwork: { dimensions, medium, title, totalPrice, year, picture: {asset, alt}}, layout} = props;
  const price = currencyFormat(totalPrice);
  const blockRef = useRef(null);
  let imageUrl;
  let classList = cn(
    'block relative opacity-0',
    {
      // 'top-20': scrollDirection === 'down',
      // '-top-20': scrollDirection === 'up',
      'flex p-18': ['imageOnLeft', 'imageOnRight'].includes(layout)
    }
  );
  const handleWaypointEnter = () => {
    if (animationState && scrollDirection === 'up') {
      animationState.reverse();
      console.log('reverse?')
      return
    }
    const translateY = scrollDirection === 'up' ? 0 : 80
    const animes = anime({
      targets: blockRef.current,
      translateY,
      opacity: 1,
      duration: 800,
      easing: 'easeInOutSine',
    })
    setAnimationState(animes)
  }
  const handleWaypointLeave = () => {
    if (animationState && scrollDirection === 'down') {
      animationState.reverse();
      return
    }
    const translateY = scrollDirection === 'down' ? 0 : 80
    const animes = anime({
      targets: blockRef.current,
      translateY,
      opacity: 1,
      duration: 800,
      easing: 'easeInOutSine',
    })
    setAnimationState(animes)
  }
  
  if (!['imageOnLeft', 'imageOnRight'].includes(layout)) {
    imageUrl = imageBuilder(asset).url();
  }
  else {
    imageUrl = imageBuilder(asset).width(650).url()
  }
  
  title = title ? <h3 className="text-2xl font-bold font-display mb-6">{ title }</h3> : null;
  year = year ? <time className="text-lg font-body">{ year }</time> : null;
  medium = medium ? <p className="text-lg font-body mb-4">{ medium }</p> : null;
  dimensions = dimensions ? <p className="text-lg font-body mb-4">{ dimensions }</p> : null;
  totalPrice = totalPrice ? <p className="text-lg font-body">{ price }</p> : null;
  
  return (
    <section ref={blockRef} className={classList}>
      <Waypoint
        bottomOffset='10%'
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
      />
      <div>
        <img
          className={'shadow-small'}
          src={imageUrl}
        />
      </div>
      <div className="ml-20 flex-shrink-0 min-w-80 flex flex-col justify-center">
        { title }
        { year }
        { medium }
        { dimensions }
        { totalPrice }
      </div>
    </section>
  );
}

