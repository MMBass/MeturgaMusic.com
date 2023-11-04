import { useState, useContext } from 'react';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

import { SettingsContext } from '@context/SettingsContext';

function BookMarkWord({ className, ...props }) {
  const [saved, setSaved] = useState(props.saved);
  const settingsContext = useContext(SettingsContext);

  const lsSaveWord = () => { // todo move to utils
    if (!localStorage.getItem('meturgamm_words')) localStorage.setItem('meturgamm_words', JSON.stringify([]));

    const words = JSON.parse(localStorage.getItem('meturgamm_words'));
    let toSave = props.toSave;
    toSave.id = words.length.toString();
    words.push(props.toSave);  // {id: num ,word: "", results: []}
    if (words.length >= 1000) words.shift();

    localStorage.setItem("meturgamm_words", JSON.stringify(words));
    setSaved(true);
    settingsContext.updateBadge(1);
  };

  return (
    <span className={className}>
      {(saved) ?
        <>
          {(props.variant === "Bookmark") ?
            <BeenhereIcon className={'book-mark-top-icon bm-disabled'}></BeenhereIcon>
            :
            <div className={'book-mark-bottom-icon-wrapper bm-disabled'}>
              <BeenhereIcon className={'book-mark-bottom-icon'} fontSize='small'></BeenhereIcon>
            </div>
          }
        </>
        :
        <>
          {(props.variant === "Bookmark") ?
            <BookmarkBorderRoundedIcon className={'book-mark-top-icon'} onClick={() => lsSaveWord()}></BookmarkBorderRoundedIcon>
            :
            <div className={'book-mark-bottom-icon-wrapper'} onClick={() => lsSaveWord()}>
              <StarRoundedIcon className={'book-mark-bottom-icon'} fontSize='small'></StarRoundedIcon>
            </div>
          }
        </>
      }
    </span>

  );
}

export default BookMarkWord;
