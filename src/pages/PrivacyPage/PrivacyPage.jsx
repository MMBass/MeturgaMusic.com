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
      {T.Statements.map((statement, index) => (
        <>
          <br></br>
          <Typography key={index} variant="body1" className="page-content">
            {statement}
          </Typography>
        </>
      ))}
      <br></br>
    </div>
  );
}

export default PrivacyPage;