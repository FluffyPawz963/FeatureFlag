import ControlPanel from "@/components/ControlPanel";
import RuleSetEditForm from "@/components/RuleSetEditForm";
import RuleSetTree from "@/components/RuleSetTree";
import styles from '../app/page.module.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from "react";
import { renderTreeData } from '@/constants/AppConstant';

export default function WorkSpace() {
    const [selectedRuleSet, setSelectedRuleSet] = useState(renderTreeData);
    const ruleSelectionChanged = (e: any) => {
        setSelectedRuleSet(e);
    }
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
                    <div style={{ minWidth: '450px' }}><RuleSetTree selectionCallback={ruleSelectionChanged} /></div>
                    <div className='d-flex flex-fill'><RuleSetEditForm ruleSet={selectedRuleSet}/></div>
                </div>
            </div>
        </main>
    );
}