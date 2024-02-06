import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import T from "./LangsSwitchI18n";

function LangsSwitch({ className }) {
  return (
    <Card variant="outlined" className={className}>
      <CardContent>
        <Typography component="label">
          {T.WhichToDisplay}
        </Typography>
      </CardContent>

      <CardActions>
        <ToggleButtonGroup
          className={className}
          size="small"
          value={'left'}
          exclusive
          // onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            {T.EN}
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            {T.EN} + {T.HE}
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            {T.HE}
          </ToggleButton>
        </ToggleButtonGroup >
      </CardActions>
    </Card>
  );
}

export default LangsSwitch;
