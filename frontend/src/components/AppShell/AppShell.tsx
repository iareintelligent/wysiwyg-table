import React, { useMemo } from 'react';
import './AppShell.css';
import Typography from '@mui/material/Typography';
import {
    AppBar,
    Box,
    Button,
    createTheme,
    CssBaseline,
    Divider,
    Drawer,
    Grid,
    IconButton,
    TextField,
    ThemeProvider,
    Toolbar,
} from '@mui/material';
import { useTable } from '../../providers/table';
import { GitHub, LinkedIn, Menu } from '@mui/icons-material';
import Table from '../Table/Table';

const drawerWidth = 240;

const AppShell: React.FC = () => {
    const theme = createTheme({
        palette: {
            primary: { main: '#00b2ba', contrastText: '#fff' },
        },
    });
    const [mobileOpen, setMobileOpen] = React.useState(true);
    const { numRows, numCols, setNumRows, setNumCols } = useTable();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const error = useMemo(() => {
        return !(numRows > 0 && numCols > 0);
    }, [numRows, numCols]);

    function handleSetNums(
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
        hook: (definitelyAnInteger: number) => void
    ) {
        const tableSizeInt = parseInt(event.target.value);
        if (!isNaN(tableSizeInt) && tableSizeInt < 26 && tableSizeInt >= 0) {
            hook(tableSizeInt);
        }
    }

    function ExternalLinkButton(href: string, icon: JSX.Element) {
        return (
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <a
                    href={href}
                    target="blank"
                    rel="noopener"
                    style={{ textDecoration: 'none' }}
                >
                    {icon}
                </a>
            </Box>
        );
    }

    const drawer = (
        <div>
            <Box component={Toolbar} position="relative">
                <Box
                    position="absolute"
                    top={0}
                    right={0}
                    bottom={0}
                    left={0}
                    display="flex"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    {ExternalLinkButton(
                        '//github.com/iareintelligent/wysiwyg-table',
                        <GitHub />
                    )}
                    {ExternalLinkButton(
                        '//linkedin.com/in/topher-sikorra',
                        <LinkedIn />
                    )}
                </Box>
            </Box>
            <Divider />
            <Grid container spacing={1} p={2}>
                <Grid
                    item
                    xs={12}
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <TextField
                        fullWidth
                        data-testid="numRowsInput"
                        label="Rows"
                        variant="outlined"
                        type="number"
                        value={numRows}
                        error={numRows <= 0}
                        helperText={
                            numRows <= 0
                                ? 'Positive Integers Only'
                                : numRows == 25
                                ? 'Max value is 25'
                                : ' '
                        }
                        onChange={(event) => handleSetNums(event, setNumRows)}
                        onClick={(event) => {
                            event.currentTarget
                                .querySelector('input')
                                ?.select();
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        data-testid="numCols"
                        label="Cols"
                        variant="outlined"
                        type="number"
                        error={numCols <= 0}
                        helperText={
                            numCols <= 0
                                ? 'Positive Integers Only'
                                : numCols == 25
                                ? 'Max value is 25'
                                : ' '
                        }
                        value={numCols}
                        onChange={(event) => handleSetNums(event, setNumCols)}
                        onClick={(event) => {
                            event.currentTarget
                                .querySelector('input')
                                ?.select();
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        sx={{ mt: theme.spacing(-1) }}
                        fullWidth
                        variant="contained"
                        type="submit"
                        disabled={!error}
                        onClick={() => {
                            if (numCols === 0) setNumCols(1);
                            if (numRows === 0) setNumRows(1);
                            setMobileOpen(false);
                        }}
                    >
                        Create Table
                    </Button>
                </Grid>
            </Grid>
            <Divider />
        </div>
    );

    const container = window.document.body;

    return (
        <ThemeProvider theme={theme}>
            <Box display="flex" data-testid="mui-provided-appshell">
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Clearwater Analytics -- WYSIWYG Table
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="create table interface"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                            },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    data-testid="App"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        maxWidth: '100%',
                    }}
                >
                    <Toolbar /> {/* adds spacing to offset sticky navbar */}
                    <Table />
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default AppShell;
