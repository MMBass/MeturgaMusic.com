import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function LangsSwitch({ className }) {
  return (
    <Card variant="outlined" className={className}>
      <CardContent>
        <Typography component="label">
          איזו שפה להציג?
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
            אנגלית
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            אנגלית + עברית
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            עברית
          </ToggleButton>
        </ToggleButtonGroup >
      </CardActions>
    </Card>
  );
}

export default LangsSwitch;
