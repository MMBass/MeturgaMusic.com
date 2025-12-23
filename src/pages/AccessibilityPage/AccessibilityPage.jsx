import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import T from './AccessibilityPageI18n';
import { EXTERNAL_LINKS } from "@/constants";

function AccessibilityPage({ className, pageTitle }) {
  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <div className={`${className} page`}>
      <Typography variant="h2" component="h1" className="page-title">
        {T.PageTitle}
      </Typography>
      <Typography variant="body1" className="page-content">
        {T.Statement}
      </Typography>
      <Typography variant="body1" className="page-content">
        {EXTERNAL_LINKS.METURGAMUSIC_MAIL}
      </Typography>
    </div>
  );
}

export default AccessibilityPage;
