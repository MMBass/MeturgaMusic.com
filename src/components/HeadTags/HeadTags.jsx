//** Uses for conditional and dynamic head tags **/
import { Helmet } from "react-helmet";

function HeadTags({ currTitle, theme }) {

  return (
    <Helmet>
      <title>
        {currTitle}
      </title>
      <meta name="theme-color" content={theme.palette.primary.main} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
    </Helmet>
  );
}

export default HeadTags;
