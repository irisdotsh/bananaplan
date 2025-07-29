import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger,
    Link,
    makeStyles,
    typographyStyles,
} from '@fluentui/react-components';
import React from 'react';
import { ExternalLink } from './ExternalLink';
import { HotkeyBlockingDialogBody } from './HotkeyBlockingDialogBody';

export interface AboutDialogProps {
    className?: string;
}

export const AboutDialog: React.FC<AboutDialogProps> = (props) => {
    const classes = useStyles();

    return (
        <Dialog>
            <DialogTrigger>
                <Link {...props}>About</Link>
            </DialogTrigger>
            <DialogSurface>
                <HotkeyBlockingDialogBody>
                    <DialogTitle>About</DialogTitle>
                    <DialogContent className={classes.content}>
                        <p>
                            BananaPlan is a fork of {' '}
                            <ExternalLink href="https://github.com/joelspadin/xivplan">XIVPlan</ExternalLink> 
                            for quickly diagramming raid strategies for Final Fantasy XIV.
                        </p>
                    </DialogContent>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button appearance="secondary">Close</Button>
                        </DialogTrigger>
                    </DialogActions>
                </HotkeyBlockingDialogBody>
            </DialogSurface>
        </Dialog>
    );
};

const useStyles = makeStyles({
    content: {
        '& h2': typographyStyles.subtitle2,
    },
});
