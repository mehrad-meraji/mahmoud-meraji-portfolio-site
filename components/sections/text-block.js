import React from 'react';
import BlockContent from '@sanity/block-content-to-react'
function TextBlock({title, paragraph}) {
  return (
    <section className={ 'p-18 text-block' }>
      <h2 className={ 'font-bold font-display text-6xl mb-4' }>{ title }</h2>
      <div className="content-block">
        <BlockContent blocks={paragraph} projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} />
      </div>
    </section>
  );
}

export default TextBlock;
