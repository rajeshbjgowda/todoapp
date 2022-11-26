import React, { useEffect } from "react";
import { Formik, FormikProps } from "formik";

import * as Yup from "yup";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "../styles/landingPageStyles.scss"
import { Grid } from "@mui/material";
import TaskTab from "../components/Tab";
import { addTodoList, completedTodoList, markTaskCompleted, pendingTodoList } from '../redux/actions/todoList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../redux/rootReducer";
const LandingPage = () => {



    const pendingList = useSelector((state: RootState) => state.tasksreducer.pendingList)
    const completedList = useSelector((state: RootState) => state.tasksreducer.completedList)
    const dispatch = useDispatch()

    const taskList = useSelector((state: RootState) => state.tasksreducer.taskList)
    const initialValues: any = {
        task: "",

    };

    useEffect(() => {
        dispatch(completedTodoList())
        dispatch(pendingTodoList())
    }, [taskList])
    const addTask = (task: any) => {
        dispatch(addTodoList(task))
    }


    const handleMarkCompleted = (id: number) => {
        dispatch(markTaskCompleted(id))
    }
    return (
        <div className="container">

            <div className="todolistContainer">



                <h1>To Do App </h1>
                <Formik
                    // initial the formik attributes
                    initialValues={initialValues}
                    enableReinitialize
                    onSubmit={(values: any, action: any): void => {
                        action.setSubmitting(false);
                        let obj = {
                            id: Math.floor(Math.random() * 4135124541 + 1),
                            task: values.task,
                            isCompleted: false
                        }
                        addTask(obj)

                        action.resetForm()
                        console.log(action)

                    }}
                    // validation using yup
                    validationSchema={Yup.object().shape({
                        task: Yup.string().required("Please enter task"),

                    })}
                >

                    {(props: FormikProps<any>): any => {
                        const {
                            values,
                            errors,

                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        } = props;

                        return (
                            <form onSubmit={handleSubmit}>
                                <div className="formContainer">

                                    <Grid container spacing={2}>
                                        <Grid item xs={9}>
                                            <div className="textFieldContainer">

                                                <TextField fullWidth id="outlined-basic" label="Add Task" variant="outlined" name="task" type={"text"} onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.task}
                                                    size="small"
                                                    error={errors.task ? true : false}
                                                    helperText={errors.task && `${errors.task}`}
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Button variant="contained" disabled={isSubmitting} type="submit">Submit</Button>
                                        </Grid>

                                    </Grid>





                                </div>

                            </form>
                        )
                    }}
                </Formik>
                <div className="tabContainer">

                    <TaskTab taskList={taskList} pendingList={pendingList} completedList={completedList} handleMarkCompleted={handleMarkCompleted} />
                </div>

            </div>
        </div>
    );
};

export default LandingPage;