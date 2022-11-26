import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteTodoList } from '../redux/actions/todoList';
import "../styles/tabStyles.scss";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TaskTab({ taskList, completedList, pendingList, handleMarkCompleted }: any) {
    const [value, setValue] = React.useState(0);



    const dispatch = useDispatch()
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleDelteTask = (id: number) => {
        dispatch(deleteTodoList(id))
    }

    console.log(completedList, ":::completed list")
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="All Task" {...a11yProps(0)} />
                    <Tab label="Pending" {...a11yProps(1)} />
                    <Tab label=" Completed" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >

                <List sx={{ width: '100%', bgcolor: 'background.paper', padding: "0" }} className="listContainer">

                    {taskList && taskList.map((item: any) => {

                        return (

                            <ListItem
                                key={item.id}
                                onClick={() => handleMarkCompleted(item.id)}
                                className='listItem'
                                disablePadding
                            >
                                <ListItemButton role={undefined} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={item.isCompleted}
                                            //   checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                        //   inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={item.id} primary={item.task} />

                                    <Button variant="contained" color="error" onClick={() => handleDelteTask(item.id)}>
                                        delete
                                    </Button>
                                </ListItemButton>

                            </ListItem>
                        )
                    })}


                </List>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <List sx={{ width: '100%', bgcolor: 'background.paper', padding: "0" }} className="listContainer">

                    {pendingList && pendingList.map((item: any) => {

                        return (

                            <ListItem
                                key={item.id}
                                className='listItem'
                                disablePadding
                            >
                                <ListItemButton role={undefined} dense>

                                    <ListItemText id={item.id} primary={item.task} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}


                </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <List sx={{ width: '100%', bgcolor: 'background.paper', padding: "0" }} className="listContainer">

                    {completedList && completedList.map((item: any) => {

                        return (

                            <ListItem
                                key={item.id}

                                disablePadding
                                className='listItem'
                            >
                                <ListItemButton role={undefined} dense>

                                    <ListItemText id={item.id} primary={item.task} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}


                </List>
            </TabPanel>
        </Box>
    );
}