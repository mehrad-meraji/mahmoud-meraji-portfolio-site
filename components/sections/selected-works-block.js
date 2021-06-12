import React from 'react';

function SelectedWorksBlock({ content }) {
  console.log('selectedworksblock', content)
  return (
    <section className="grid grid-cols-3 gap-24 flex-grow mx-8 mt-8">
      {
        content.map((item) => {
          return <div className="flex justify-center flex-col">
            <img src={item.picture.asset.url} alt="" />
            <h2 className="mt-4 italic font-light">{ item.title }, { item.year }</h2>
          </div>
        })
      }
    </section>
  );
}

export default SelectedWorksBlock;
