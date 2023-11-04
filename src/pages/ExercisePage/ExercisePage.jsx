import { useState, useEffect, useContext } from 'react';
import { BannersContext } from '@context/BannersContext';
import { SettingsContext } from '@context/SettingsContext';

function ExercisePage({className}) {
  const bannersContext = useContext(BannersContext);
  const settingsContext = useContext(SettingsContext);

  useEffect(() => {
    bannersContext.createBanner("error", 'error', 'חשוב לדעת:',  ' איננו אוספים מידע מהמשתמשים, על כן המידע בעמוד זה נשמר באופן מקומי בדפדפן, עליך להשתמש באותו דפדפן אם ברצונך להשתמש בתכונות אלו');
    settingsContext.updateBadge(false);
  }, []);

  return (
    <div id="" className={className}>
      
    </div>
  );
}

export default ExercisePage;
