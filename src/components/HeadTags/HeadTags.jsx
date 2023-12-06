//** uses for conditional and dynamic head tags **/

import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

function HeadTags(props) {
  const [themeColor, setThemeColor] = useState(props.theme.palette.primary.main);

  useEffect(() => {
    setThemeColor(props.theme.palette.primary.main);
  }, [props.theme]);

  return (
    <Helmet>
      <title>
        {props.currTitle}
      </title>
      <meta name="theme-color" content={themeColor} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      {/* <!-- .BassSites Sarch-console tag --> */}
      {/* <!-- <meta name="google-site-verification" content="Ovp5O_FlrRV0WVdSIMpbGK4gNeds504xdwOMPXJn7XI" /> --> */}

      {/* <!-- Meturgamusic Sarch-console tag --> */}
      <meta name="google-site-verification" content="AGB8vajsDH1bMMQGmfSJR01j8pfQfQrHRP8cUxFiZH4" />
    </Helmet>
  );
}

export default HeadTags;
