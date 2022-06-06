
import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import Style from './TodoApp.module.css';
import { useState} from 'react';

const TodoApp = () => {

    const [inputWorkName, setInputWorkName] = useState('');
    const [controlButton, setControlButton] = useState('add');
    const [indexWorkEdit, setIndexWorkEdit] = useState(0);
    const [works, setWorks] = useState([]);
    const [sumWorks, setSumWorks] = useState(0);
    const [sumWorksDelete, setSumWorksDelete] = useState(0);

    const addWork = () => {
        try{
            if(inputWorkName !== ''){
                setWorks(prev => [inputWorkName, ...prev]);
                setSumWorks(prev => prev + 1);
                setInputWorkName('');
            }
        }catch(e){
            console.log(e);
        }
        
    }
    
    const deleteWork = (event, index) => {
        try{
            let tmpArrWork = [...works];
            tmpArrWork.splice(index, 1);
            setSumWorksDelete(prev => prev + 1);
            setWorks(tmpArrWork);
        }catch(e){
            console.log(e);
        }
    }

    const setUpEditWork = (event , index) => {
        try{
            setInputWorkName(works[index]);
            setIndexWorkEdit(index);
            setControlButton('edit');
        }catch(e){
            console.log(e);
        }
    }

    const sendEditWork = () => {
        let tmpArrWork = [...works];
        tmpArrWork[indexWorkEdit] = inputWorkName;
        setWorks(tmpArrWork);
        setControlButton('add');
        setInputWorkName('');

    }

    const deleteAll = () => {
        setSumWorksDelete(prev => prev + works.length);
        setWorks([]);
    }

    return (
        <>
            <div className={Style.main}>
                <div className={Style.box}>

                    <div className={Style.title}>
                        <h4>Todo App</h4>
                    </div>

                    <div className={Style.create_work}>
                        <input value={inputWorkName} onChange={(event) => setInputWorkName(event.target.value)} placeholder='Work ...'></input>
                        {
                            controlButton === 'add' ?
                                <button onClick={addWork}>Add</button>
                            :
                                <button onClick={sendEditWork}>Edit</button>
                        }
                        
                    </div>

                    <div className={Style.statistical}>
                        <button>Added ({sumWorks})</button>
                        <button>Deleted ({sumWorksDelete})</button>
                    </div>

                    <div className={Style.list_todo}>
                        {
                            works && works.map((work, index) => (
                                <div className={Style.item} key={index}>
                                    <p>{work}</p>
                                    <button className={Style.btn_add} onClick={(event) => deleteWork(event, index)}>
                                        <MdDelete className={`${Style.icon} ${Style.icon_add}`}></MdDelete>
                                    </button>
                                    <button className={Style.btn_edit} onClick={(event) => setUpEditWork(event, index)}>
                                        <FaRegEdit className={`${Style.icon} ${Style.icon_edit}`}></FaRegEdit>
                                    </button>
                                </div>
                            ))
                        }
                        
                    </div>
                    <div className={Style.delete}>
                        <button onClick={(event) => deleteAll()}>Delete All</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoApp;