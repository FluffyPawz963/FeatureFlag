import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function RuleSetEditForm(ruleSet: RenderTree, parentRuleStatus?: boolean) {
  const [toggleDisabled, setToggleDisabled] = useState(typeof (ruleSet.feature) !== 'boolean');
  const ruleType = ruleSet.children && ruleSet.children.length >= 0 ? 'This is a standlone rule' : 'This is a rule set';
  const ruleAvaliableActions = ruleSet.children && ruleSet.children.length >= 0 ? 'You can only turn it on / off' : 'You can use boolean flag or primitive data typ';
  const ruleImpact = ruleSet.children && ruleSet.children.length >= 0 ? 'Changing the rule has impact on all feature under it' : 'Changing this rule will impact the feature it binds to';

  const onFlagTypeChange = (flag: String) => {
    setToggleDisabled(flag !== 'switch');
  };

  return (
    <div className='d-flex flex-column'>
      <h6>Edit Rule</h6>
      <ul>
        <li>{ruleType}</li>
        <li>{ruleAvaliableActions}</li>
        <li>{ruleImpact}</li>
      </ul>
      <FormGroup>
        <div>
          <RadioGroup name="radio-buttons-group" defaultValue={typeof (ruleSet.feature) === 'boolean' ? 'switch' : 'value'} onChange={(e) => onFlagTypeChange(e.target.value)}>
            <FormControlLabel value="switch" control={<Radio />} label="Use a on / off switch" />
            <FormControlLabel label="ON" disabled={toggleDisabled} control={<Switch defaultChecked />} />
            <FormControlLabel value="value" control={<Radio />} label="Use a string or number" />
            <TextField id="standard-basic" disabled={!toggleDisabled} label="primitive value" variant="standard" />
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