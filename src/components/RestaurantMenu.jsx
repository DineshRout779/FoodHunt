import { useState } from 'react';
import RestaurantMenuItem from './RestaurantMenuItem';

const RestaurantMenu = ({ menu }) => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);

  const handleToggleAccordion = (index) => {
    if (index === activeAccordionIndex) {
      setActiveAccordionIndex(null);
    } else {
      setActiveAccordionIndex(index);
    }
  };

  return (
    <div className='my-4'>
      {menu?.map((m, i) => {
        if (m?.card?.card?.title) {
          return (
            <RestaurantMenuItem
              items={m}
              key={i}
              index={i}
              activeIndex={activeAccordionIndex}
              setActiveIndex={handleToggleAccordion}
            />
          );
        }
      })}
    </div>
  );
};

export default RestaurantMenu;
