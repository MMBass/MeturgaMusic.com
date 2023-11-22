//** uses for conditional and dynamic head tags **/

import { useState } from 'react';
import MetaTags from 'react-meta-tags';

function HeadTags(props) {
  const [themeColor] = useState(props.theme.palette.primary.main);

  return (
    <div className='wrapper'>
      <MetaTags>
        <title>
          {props.currTitle}
        </title>
        <meta name="theme-color" content={themeColor} />
        <script def="true" src="https://www.googletagmanager.com/gtag/js?id=G-QMMQB4M4DE"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"></link>

      </MetaTags>
    </div>
  );
}

export default HeadTags;
