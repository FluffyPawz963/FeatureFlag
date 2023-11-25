import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';

export default function RuleSetEditForm(value: any) {
  return (
    <div className='d-flex flex-column'>
      <h6>Edit Rule</h6>
      <ol>
        <li>What type of rule is this ?</li>
        <li>You what can do with it ?</li>
        <li>What will be the impact for other rules ?</li>
      </ol>
      <FormGroup>
        <div>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="switch" control={<Radio />} label="Use a on / off switch" />
            <FormControlLabel label="ON" control={<Switch defaultChecked />} />

            <FormControlLabel value="value" control={<Radio />} label="Use a string or number" />
            <TextField id="standard-basic" label="primitive value" variant="standard" />
          </RadioGroup>
          <br /><br />
          <Stack spacing={2} direction="row">
            <Button size="small" variant="contained">Save</Button>
            <Button size="small" variant="contained">Reset</Button>
          </Stack>
        </div>
      </FormGroup>
    </div>
  );
}