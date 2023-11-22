import { useEffect, useState } from 'react';
import {
  LinearProgress
} from '@mui/material';

function DeterminateLinearProgress({className, ...props}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 220);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <LinearProgress variant="determinate" value={progress} color={props.color} />
  );
}

export default DeterminateLinearProgress;
