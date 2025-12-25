import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import T from './TermsPageI18n';

function TermsPage({ className, pageTitle }) {
  useEffect(() => {
    document.title = pageTitle || T.PageTitle;
  }, [pageTitle]);

  return (
    <div className={`${className} page`}>
      <Typography variant="h2" component="h1" className="page-title">
        {T.PageTitle}
      </Typography>
      {T.Statements.map((statement, index) => (
        <>
          <br />
          <Typography key={index} variant="body1" className="page-content">
            {statement}
          </Typography>
        </>
      ))}
      <br />
    </div>
  );
}

export default TermsPage;
