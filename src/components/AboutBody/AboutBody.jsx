import { useContext } from "react";
import i18n from "@/i18n";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import aboutBody1 from '../../images/screenshots/latest/shot1.png';

// import screenshot1url from '../../images/screenshots/screenshot-1.png';
// import screenshot2url from '../../images/screenshots/screenshot-2.png';
// import screenshottturl from "../../images/screenshots/screenshot-tt.png"
// import screenshotchangesizeurl from '../../images/screenshots/screenshot-changesize.png';

function AboutBody({ className }) {
  const t = useContext(i18n);

  // const exampleSong = [
  //   { src: "translated song example", trans: 'דוגמא לשיר מתורגם' },
  //   { src: "english line", trans: 'שורה באנגלית' },
  //   { src: "and hebrew line after", trans: 'ואחריה שורה בעברית' }
  // ];

  return (
    <Grid container className={className}>

      <Grid item xs={12} sm={5} spacing={0} wrap="no-wrap" height={'90vh'}>
        <Typography component={'p'} variant="h4" wrap>{t('aboutBody1')}</Typography>
      </Grid>

      <Grid item xs={12} sm={5} spacing={0}>
        <img src={aboutBody1}></img>
      </Grid>

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


    </Grid>
  );
}

export default AboutBody;
