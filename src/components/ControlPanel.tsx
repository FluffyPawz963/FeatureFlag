import { envs, regions } from '@/constants/AppConstant';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import DialogWrapper from"@/components/DialogWrapper";

export default function ControlPanel() {
    const [removeEnvConfirmationOpen, setRemoveEnvConfirmationOpen] = useState(false);
    const [removeRegionConfirmationOpen, setRemoveRegionConfirmationOpen] = useState(false);

    const toggleEnvConfirmation = (e: boolean) => {
        setRemoveEnvConfirmationOpen(e)
    };
    const toggleRegionConfirmation = (e: boolean) => {
        setRemoveRegionConfirmationOpen(e)
    };
    return (
        <div>
            <Card>
                <CardContent>
                    <h6>Environments</h6>
                    <div className='d-flex flex-wrap' style={{ gap: '0 24px' }}>
                        {envs.map(x => <label key={`key-${x.toLocaleUpperCase()}`}>&nbsp;<input type="radio" id={`testid-${x.toLocaleUpperCase()}`} name="envs" value="HTML" />&nbsp;{x}</label>)}
                    </div>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small">Add</Button>
                    <Button variant="contained" size="small" onClick={()=>toggleEnvConfirmation(true)}>Remove</Button>
                    <DialogWrapper title={"Remove Environment"}
                    text={"Removing a enire env will also discard all the rule set created under it, are you sure ?"}
                    confirmText="Confirm" 
                    cancelText="Cancel"
                    handleClickConform={()=>console.log()}
                    handleClickCancel={()=>toggleEnvConfirmation(false)}
                    open={removeEnvConfirmationOpen} />
                </CardActions>
            </Card>
            <br />
            <Card>
                <CardContent>
                    <h6>Regions</h6>
                    <div className='d-flex flex-wrap' style={{ gap: '0 24px' }}>
                        {regions.map(x => <label key={`key-${x.toLocaleUpperCase()}`}><input type="radio" id={`testid-${x.toLocaleUpperCase()}`} name="regions" value="HTML" />&nbsp;{x}</label>)}
                    </div>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small">Add</Button>
                    <Button variant="contained" onClick={()=>toggleRegionConfirmation(true)} size="small">Remove</Button>
                    <DialogWrapper title={"Remove Region"}
                    text={"Removing a entire set for region under environment, are you sure ?"}
                    confirmText="Confirm" 
                    cancelText="Cancel"
                    handleClickConform={()=>console.log()}
                    handleClickCancel={()=>toggleRegionConfirmation(false)}
                    open={removeRegionConfirmationOpen} />
                </CardActions>
            </Card>
        </div>
    );
}