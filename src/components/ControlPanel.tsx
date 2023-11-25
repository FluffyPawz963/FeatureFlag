import { envs, regions } from '@/constants/AppConstant';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function ControlPanel() {
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
                    <Button variant="contained" size="small">Remove</Button>
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
                    <Button variant="contained" size="small">Remove</Button>
                </CardActions>
            </Card>
        </div>
    );
}