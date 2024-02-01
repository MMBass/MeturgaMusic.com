import { useEffect, useState, Fragment } from "react";
import T from "./AboutBodyI18n";

import { v4 as uuidv4 } from 'uuid';
import { useTheme } from '@mui/material/styles';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import shot1 from '@/images/screenshots/shotone.png';
import shot1Dark from '@/images/screenshots/shotoneDark.png';
import shot2 from '@/images/screenshots/shot2.png';
import shot2Dark from '@/images/screenshots/shot2Dark.png';
import shot5 from '@/images/screenshots/shot8.png';
import shot5Dark from '@/images/screenshots/shot8Dark.png';
import shot3 from '@/images/screenshots/shot3.png';
import shot3Dark from '@/images/screenshots/shot3Dark.png';

function AboutBody({ className, isDark }) {
  const showRemoveTrigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 200,
  });

  const theme = useTheme(); // TODO check why not listenin to changes - but in HomePage it does 

  const data = [
    {
      img: shot1,
      imgDark: shot1Dark,
      alt: T.Shot1Alt,
      header: T.Shot1Header,
      bodyStrings: T.Shot1Body.split(","),
      bottom: T.Shot1Bottom,
      footer: T.Shot1Footer,
    },
    {
      img: shot5,
      imgDark: shot5Dark,
      alt: T.Player1Alt,
      header: T.PlayerHadeer,
      bodyStrings: T.PlayerBody.split(","),
    },
    {
      img: shot2,
      imgDark: shot2Dark,
      alt: T.SingleTransAlt,
      header: T.SingleTransHeader,
      bodyStrings: T.SingleTransBody.split(","),
      footer: T.SingleTransFooter,
    },
    {
      img: shot3,
      imgDark: shot3Dark,
      alt: T.ExerciseAlt,
      header: T.ExerciseHeader,
      bodyStrings: T.ExerciseBody.split(","),
      bottom: "",
    }
  ];

  const [visibleItems, setVisibleItems] = useState(data);

  // Load the visible from the local storage
  useEffect(() => {
    const storedItems = localStorage.getItem("visibleItems");
    if (storedItems) {
      setVisibleItems(JSON.parse(storedItems));
    }
  }, []);

  const handleRemove = (vItem) => {
    // Filter out the item from the visible items
    const newItems = visibleItems.filter((i) => i !== vItem);
    setVisibleItems(newItems);
    localStorage.setItem("visibleItems", JSON.stringify(newItems));
  };

  return (
    <Box className={className}>
      {visibleItems.map((vItem, index) => (
        <Fragment key={uuidv4() + index}>
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
                  src={isDark ? vItem.imgDark : vItem.img}
                  alt={vItem.alt}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6} className="strings-item">
              {vItem.header &&
                <Typography className="about-header" variant="p" component="p">
                  {vItem.header}
                </Typography>
              }

              <div className="strings-container">
                {vItem.bodyStrings.length && vItem.bodyStrings.map((str, strIndex) => {
                  return (
                    <Typography className="about-string" key={uuidv4() + strIndex} variant="p" component="p">
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