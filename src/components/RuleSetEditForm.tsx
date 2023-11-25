import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function RuleSetEditForm(value: any) {
    return (
        <div className='d-flex flex-column'>
            <h6>Edit Rule</h6>
            <FormGroup>
                <div>
                    <FormControlLabel label="ON" control={<Switch defaultChecked />} />
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