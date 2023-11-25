import ControlPanel from "@/components/ControlPanel";
import RuleSetEditForm from "@/components/RuleSetEditForm";
import RuleSetTree from "@/components/RuleSetTree";
import styles from '../app/page.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function WorkSpace() {
    return (
        <main className={styles.main}>
            <div className='d-flex flex-column' style={{ minWidth: '1024px' }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Workspace for rule set - MyBankingApp
                        </Typography>
                        <Button color="inherit">View</Button>
                        <Button color="inherit">Edit</Button>
                    </Toolbar>
                </AppBar>                
                <br />
                <ControlPanel />
                <br />
                <div className='d-flex flex-row' style={{ justifyContent: 'space-between' }}>
                    <div style={{ minWidth: '450px' }}><RuleSetTree /></div>
                    <div className='d-flex flex-fill'><RuleSetEditForm /></div>
                </div>
            </div>
        </main>
    );
}