import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import T from './PrivacyPageI18n';

function PrivacyPage({ className, pageTitle }) {
  useEffect(() => {
    document.title = pageTitle;
  }, []); 
  
  return (
    <div className={`${className} page`}>
      <Typography variant="h2" component="h1" className="page-title">
        {T.PageTitle}
      </Typography>
      <Typography variant="body1" className="page-content">
        {T.Line1}
      </Typography>
      <Typography variant="body1" className="page-content">
        {T.Line2}
      </Typography>
      <Typography variant="body1" className="page-content">
        {T.Line3}
      </Typography>
    </div>
  );
}

export default PrivacyPage;

