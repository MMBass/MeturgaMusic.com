import { useEffect, useState, Fragment } from "react";
import T from "./AboutBodyI18n";
import { LOCAL_STORAGE_KEYS } from '@/constants';

import { useTheme } from '@mui/material/styles';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';

import shot1 from '@/assets/screenshots/shotone.png';
import shot1Dark from '@/assets/screenshots/shotoneDark.png';
import shot2 from '@/assets/screenshots/shot2.png';
import shot2Dark from '@/assets/screenshots/shot2Dark.png';
import shot3 from '@/assets/screenshots/shot3.png';
import shot3Dark from '@/assets/screenshots/shot3Dark.png';
import shot5 from '@/assets/screenshots/shot8.png';
import shot5Dark from '@/assets/screenshots/shot8Dark.png';

function AboutBody({ className }) {
  const showRemoveTrigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 200,
  });

  const theme = useTheme();

  const aboutCardsData = [
    {
      id: 1,
      img: shot1,
      imgDark: shot1Dark,
      alt: T.Shot1Alt,
      ico: <QueueMusicOutlinedIcon></QueueMusicOutlinedIcon>,
      header: T.Shot1Header,
      bodyStrings: T.Shot1Body.split(","),
      bottom: T.Shot1Bottom,
      footer: T.Shot1Footer,
    },
    {
      id: 2,
      img: shot5,
      imgDark: shot5Dark,
      alt: T.Player1Alt,
      ico: <VideoLibraryOutlinedIcon></VideoLibraryOutlinedIcon>,
      header: T.PlayerHadeer,
      bodyStrings: T.PlayerBody.split(","),
    },
    {
      id: 3,
      img: shot2,
      imgDark: shot2Dark,
      alt: T.SingleTransAlt,
      ico: <TranslateOutlinedIcon></TranslateOutlinedIcon>,
      header: T.SingleTransHeader,
      bodyStrings: T.SingleTransBody.split(","),
      footer: T.SingleTransFooter,
    },
    {
      id: 4,
      img: shot3,
      imgDark: shot3Dark,
      alt: T.ExerciseAlt,
      ico: <EditCalendarOutlinedIcon></EditCalendarOutlinedIcon>,
      header: T.ExerciseHeader,
      bodyStrings: T.ExerciseBody.split(","),
      bottom: "",
    }
  ];

  const [visibleItems, setVisibleItems] = useState(aboutCardsData);

  // Load the visible from the local storage
  useEffect(() => {
    const storedItems = localStorage.getItem(LOCAL_STORAGE_KEYS.VISIBLE_ITMS);
    if (storedItems) {
      setVisibleItems(JSON.parse(storedItems));
    }
  }, []);

  const handleRemove = (vItem) => {
    // Filter out the item from the visible items
    const newItems = visibleItems.filter((i) => i !== vItem);
    setVisibleItems(newItems);
    localStorage.setItem(LOCAL_STORAGE_KEYS.VISIBLE_ITMS, JSON.stringify(newItems));
  };

  return (
    <Box className={className}>
      {visibleItems.map((vItem, index) => (
        <Fragment key={vItem.id}>
          <Grid
            className={(index % 2 == 0) ? " even-item" : " not-even-item"} // for different style if even-index
            container
          >

            <Grid item xs={12} className="about-body-top">
              <IconButton aria-label="delete"
                onClick={() => handleRemove(vItem)}>
                {showRemoveTrigger && <CloseOutlinedIcon className='remove-icon' />}
              </IconButton>
            </Grid>

            <Grid item xs={12} sm={6} className="img-item">
              <div className="img-container">
                <img
                  loading="lazy"
                  src={theme.mode !== 'dark' ? vItem.img : vItem.imgDark}
                  alt={vItem.alt}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6} className="strings-item">
              {vItem.ico &&
                <span className="about-ico">{vItem.ico}</span>
              }

              {vItem.header &&
                <Typography className="about-header" variant="p" component="p">
                  {vItem.header}
                </Typography>
              }

              <div className="strings-container">
                {vItem.bodyStrings.length && vItem.bodyStrings.map((str, strIndex) => {
                  return (
                    <Typography className="about-string" key={strIndex} variant="p" component="p">
                      {str.replace(',', '')}
                    </Typography>
                  )
                })}
              </div>

              {vItem.bottom &&
                <Typography className="about-bottom" variant="p" component="p">
                  {vItem.bottom}
                </Typography>
              }

              {vItem.btnAction &&
                <Button variant="contained" aria-label={vItem.btnLabel} onClick={() => { vItem.btnAction() }}>
                  {vItem.btnText}
                </Button>
              }

            </Grid>

            {vItem.footer &&
              <Grid item xs={12} className="about-footer">
                <Typography>{vItem.footer}</Typography>
              </Grid>
            }
          </Grid>
        </Fragment>
      ))}
    </Box>
  );
}

export default AboutBody;