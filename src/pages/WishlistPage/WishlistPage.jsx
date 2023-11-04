import { useState, useEffect, useContext } from 'react';

import { BannersContext } from '@context/BannersContext';

function WishlistPage({className}) {
  const bannersContext = useContext(BannersContext);

  useEffect(() => {
    bannersContext.createBanner("error", 'error', 'חשוב לדעת:',  ' איננו אוספים מידע מהמשתמשים, על כן המידע בעמוד זה נשמר באופן מקומי בדפדפן, עליך להשתמש באותו דפדפן אם ברצונך להשתמש בתכונות אלו');
    bannersContext.createBanner("error", 'error', 'Comming Soon!',  'עמוד זה בבניה');
  }, []);

  return (
    <div id="" className={className}>
      
    </div>
  );
}

export default WishlistPage;
