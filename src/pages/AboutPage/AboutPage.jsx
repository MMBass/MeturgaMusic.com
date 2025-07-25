import { useEffect } from 'react';

import AboutBody from "@components/AboutBody/StyledAboutBody";
import SONGS_LIST from "@/data/example-songs-list";
import TUtils from '@/i18n-utils';

import Typography from '@mui/material/Typography';

function AboutPage({ className, pageTitle }) {
  useEffect(() => {
    document.title = pageTitle;
  }, []); 
  
  return (
    <div className={`${className} page`}>
      <AboutBody></AboutBody>

      <div className="songs-list">
        <Typography component={'h5'}>{TUtils.ExampleSongs}</Typography>
        {
          SONGS_LIST.map((song, index) => {
            return (
              <Typography component={'a'} key={index} href={song}>{song}</Typography>
            );
          })
        }
      </div>

    </div>
  );
}

export default AboutPage;