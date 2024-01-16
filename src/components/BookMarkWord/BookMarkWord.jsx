import { useState, useContext, useEffect } from 'react';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

import { SettingsContext } from '@context/SettingsContext';
import utils from '@/utils';
import T from "./BookMarkWordI18n";

function BookMarkWord({ className, toSave, variant }) {
  const [saved, setSaved] = useState(false);
  const settingsContext = useContext(SettingsContext);

  useEffect(() => {
    if (findSaved()) { setSaved(true) }
  }, []);

  const findSaved = () => {
    if (!localStorage.getItem('meturgamm_words')) return false;

    const words = JSON.parse(localStorage.getItem('meturgamm_words'));

    return words.find(w => w.word.toLowerCase() === toSave.word.toLowerCase());  // {word: "", results: []} 
  }

  const handleSaveWord = () => {
    try {
      utils.lsSaveWord(toSave);
      setSaved(true);
      settingsContext.updateBadge(1);
    } catch (e) {
      if (e) { console.log(e) };
    }

  }

  return (
    <span className={className}>
      {(saved) ?
        <>
          {(variant === "Bookmark") ?
            <BeenhereIcon className={'book-mark-top-icon bm-disabled'}></BeenhereIcon>
            :
            <div className={'book-mark-bottom-icon-wrapper bm-disabled'}>
              <BeenhereIcon className={'book-mark-bottom-icon'} fontSize='small'></BeenhereIcon>
            </div>
          }
        </>
        :
        <>
          {(variant === "Bookmark") ?
            <>
              <BookmarkBorderRoundedIcon className={'book-mark-top-icon'} fontSize='small' onClick={() => handleSaveWord()}></BookmarkBorderRoundedIcon>
            </>
            :
            <div className={'book-mark-bottom-icon-wrapper'} onClick={() => handleSaveWord()}>
              <StarRoundedIcon className={'book-mark-bottom-icon'} fontSize='small'></StarRoundedIcon>
              <span>{T.Save}</span>
            </div>
          }
        </>
      }
    </span>

  );
}

export default BookMarkWord;
