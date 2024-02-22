import { useState, useEffect, useContext } from 'react';
import { SettingsContext } from '@context/SettingsContext';
import T from "./ExercisePageI18n";

import ExerciseItem from '@components/ExerciseItem/StyledExerciseItem';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';

function ExercisePage({ className, pageTitle }) {
  const settingsContext = useContext(SettingsContext);

  const [words, setWords] = useState(JSON.parse(localStorage.getItem('meturgamm_words')) || []);

  useEffect(() => {
    settingsContext.updateBadge(false);
    document.title = pageTitle;
  }, []);

  const deleteOneWord = (id) => {
    let newWords = words.filter((w) => w.id !== id);
    setWords(newWords);
    localStorage.setItem("meturgamm_words", JSON.stringify(newWords));
  };

  return (
    <div className={`${className} page`}>
      {words[0] &&
        <List
          sx={{ width: '100%' }}
          component="div"
          aria-labelledby="nested-list-subheader"
        >
          <Grid container spacing={1}>
            {words.map((lyric, i) => (
              <Grid item key={lyric.word + i} md={3} lg={3} xs={12}>
                <ExerciseItem lyric={lyric} deleteOneWord={deleteOneWord}>
                </ExerciseItem>
              </Grid>
            ))}
          </Grid>
        </List>
      }
      {!words[0] && <Typography sx={{ margin: 'auto', marginTop: '20%', textAlign: 'center' }}>{T.Empty}</Typography>}

    </div>
  );
}

export default ExercisePage;
