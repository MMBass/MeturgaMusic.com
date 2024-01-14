import { useEffect, useContext, useState } from "react";
import T from "./AboutBodyI18n";

import { v4 as uuidv4 } from 'uuid';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import shot1 from '../../images/screenshots/homeimgs/shot1.png';
import shot2 from '../../images/screenshots/homeimgs/shot2.png';
import shot5 from '../../images/screenshots/homeimgs/shot8.png';
import shot3 from '../../images/screenshots/homeimgs/3.jpg';


function AboutBody({ className, ...props }) {
  const data = [
    {
      img: shot1,
      strings: [T.AboutLineByLine],
      bottomString: T.AboutBody1
    },
    {
      img: shot5,
      strings: [T.AboutPlayer],
      bottomString: ""
    },
    {
      img: shot2,
      strings: [T.AboutSingleWord],
      bottomString: ""
    },
    {
      img: shot3,
      strings: [T.AboutExercise],
      bottomString: ""
    },
  ];

  const [visibleItems, setVisibleItems] = useState(data);

  // Effect to load the preference from the local storage
  useEffect(() => {
    const storedItems = localStorage.getItem("visibleItems");
    if (storedItems) {
      setVisibleItems(JSON.parse(storedItems));
    }
  }, []);

  const handleRemove = (item) => {
    // Filter out the item from the visible items
    const newItems = visibleItems.filter((i) => i !== item);
    // Update the state and the local storage
    setVisibleItems(newItems);
    localStorage.setItem("visibleItems", JSON.stringify(newItems));
  };


  return (
    <Box className={className}>
      {visibleItems.map((item, index) => (
        <>
          <Grid
            className={(index % 2 == 0) ? "even-item" : "not-even-item"} // set the bg gradient if even-index
            key={uuidv4() + index}
            container
          >

            <Grid item xs={12} className="about-body-top">
              <IconButton aria-label="delete"
                onClick={() => handleRemove(item)}>
                <CloseOutlinedIcon className='remove-icon' />
              </IconButton>
            </Grid>

            <Grid item xs={12} sm={6} className="img-item">
              <div className="img-container">
                <img
                  src={item.img}
                  alt="Random"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6} className="strings-item">
              <div className="strings-container">
                {item.strings.length && item.strings.map((str, strIndex) => {
                  return (
                    <Typography key={uuidv4() + strIndex} variant="p" component="p">
                      {str}
                    </Typography>
                  )
                })}
              </div>
              {item.btnAction &&
                <Button variant="contained" onClick={() => { item.btnAction() }}>
                  {item.btnText}
                </Button>
              }
            </Grid>

            {item.bottomString &&
              <Grid item xs={12} className="about-body-bottom">
                <Typography>{item.bottomString}</Typography>
              </Grid>
            }
          </Grid>
        </>
      ))}
    </Box>
  );
}

export default AboutBody;


// DRAFT : 
{/* <b>
        האתר שיתרגם לעברית
        <br />
        כמעט כל שיר שתחפשו באנגלית
        <br />
        וישאיר את הטקסט המקורי לעיני המשתמש
      </b>
      <br />
      <br />
      <br />
      <img src={screenshot2url} alt="home-2"></img>
      <br />
      <img src={screenshot1url} alt="home-1"></img>
      <br />
      <p>
        מהיום תוכלו למצוא את השירים האהובים עליכם באנגלית,
        וללמוד אנגלית באמצעותם בצורה נוחה וללא צורך לצאת לאפליקציות חיצוניות,
        עם גודל הכתב המועדף עליכם, בעיצוב נקי ללא הסחות דעת, ועם תרגומים נוספים לכל מילה
      </p>

      <p>
        היות ואנו משתמשים בתרגום אטומטי המבוצע על ידי מכונה, התרגום אינו מושלם,
        ועל כן סידרנו תרגום מילוני לכל מילה בנפרד, כך אם ההקשר של תרגום המשפט אינו מתאים,
        תוכלו להשוות עם תרגומים נוספים
      </p>

      <img src={screenshottturl} alt="קלוס אפ עם הטולטיפ" />

      <p>
        הכתב גדול/קטן מידי? סידרנו כפתור לשינוי גודל הטקסט, והדפדפן ישמור את העדפתך
      </p>
      <img src={screenshotchangesizeurl} alt="כפתור פונטסייז" />

      <h4>        מה מיוחד באתר?</h4>
      <p>

        - בשונה מתרגום אתר רגיל באמצעות הדפדפן, התרגום אצלנו מופיע בזמן שהטקסט המקורי נשאר מול עיני המשתמש
        <br />
        - כפתור נוח לשינוי גודל הכתב, השומר בנוסף את העדפת המשתמש, ללא צורך לשנות את הגדרות הדפדפן
        <br />
        - תרגום מהיר לכל מילה בודדת ללא צורך לצאת לאפליקציות חיצוניות
      </p>


      <h4>   מי אנחנו?</h4>
      <p>

        אנחנו מתורגמיוזיק.
        <br />
        ראינו את הצורך באתר המיועד לדוברי עברית הרוצים ללמוד אנגלית בצורה חוויתית ונוחה, או סתם לדעת את משמעות השיר האהוב עליהם.
        נתקלנו בקושי בשימוש באתרי מילים הרגילים, בהם תרגום הדף או מילה בודדת דורש לחיצות מיותרות ומשאיר אותך עם התרגום בלבד וללא המקור, או מוציאך לאפליקציה חיצונית ואיטית בדרך כלל
        בנוסף גילינו את הוספת כפתור לשינוי גודל הכתב שימושית ביותר, אינה מופיעה כלל באתרים המציגים טקסט ומיועדים לקריאה, ומצריכה שימוש בהגדרות הדפדפן או תוסף נגישות מסורבל
      </p> */}
