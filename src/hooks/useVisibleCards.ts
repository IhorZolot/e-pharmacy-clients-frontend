import React, { useEffect } from 'react'

const useVisibleCards = () => {
  const [visibleCards, setVisibleCards] = React.useState(1)

  useEffect(() => {
   const updateCards = () => {
     const width = window.innerWidth
     if (width >= 1440) {
       setVisibleCards(3)
     } else if (width >= 768) {
       setVisibleCards(2) 
     } else {
       setVisibleCards(1)
     }
   }
   updateCards();
   window.addEventListener('resize', updateCards);
   return () => {
     window.removeEventListener('resize', updateCards);
   };
  }, [])
  return visibleCards
}

export default useVisibleCards