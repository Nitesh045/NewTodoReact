import React, { useEffect, useState } from 'react'
import './Todo.css'
import Done from './Done';





export const Todo = () => {
    let date = Date(Date.now());
    const [title, setTitle] = useState('');
    const [dis, setDis] = useState('');
    const [alltodo, setTodo] = useState([]);
    const [completed, setDone] = useState([]);
    const addTodo = (e) => {
       if(title!=="" && dis!==''){
        let newTodo = {
            tit: title,
            discr: dis
        };
        let updatedTodo = [...alltodo];
        updatedTodo.push(newTodo);
        setTodo(updatedTodo);
        console.log(alltodo);
        localStorage.setItem('todoList', JSON.stringify(updatedTodo))
        setDis('');
        setTitle('');
       }
        e.preventDefault()
       

    };
    const deleteTodo = (i) => {
        let removeTodo = [...alltodo];
        const removedTodo = removeTodo.splice(i, 1);
        localStorage.setItem('todoList', JSON.stringify(removeTodo));
        setTodo(removeTodo);
        
    };
    const doneTask = (i) => {
        //     let resttodo=[...alltodo]
        //     // let completedTodo=[...completed];
        //     let doneTodo= resttodo.splice(i,1);
        //     completed.push(doneTodo);
        //     setDone(completed);
        //     setTodo(resttodo); 
        //     console.log(completed)
        //    // console.log(doneTodo);
        //     // setDone(completed);
        //     // console.log(completed);
        let filteredArr = {
            ...alltodo[i]

        }
        let updatedCompleted = [...completed];
        updatedCompleted.push(filteredArr);
        setDone(updatedCompleted);
        deleteTodo(i);
    };

    const editTodo = (i) => {
        let newEditTodo = [...alltodo];
        const editIteam = newEditTodo.splice(i, 1)
        setTodo(newEditTodo);
        editIteam.map((data => {
            return (
                setDis(data.discr),
                setTitle(data.tit)
            )
        }));
        // setDis(editIteam.discr);
        // setTitle(editIteam.tit);

    }
    useEffect(() => {
        let localTodo = JSON.parse(localStorage.getItem('todoList'));
        if (localTodo) {
            setTodo(localTodo);
        }
    }, [])


    return (
        <div className='container'>
            <div className="first-container">
                <form onSubmit={addTodo}>
                    <div className="main">
                        <div className="tittle">
                            <label htmlFor='title'>Tittle</label>
                            <br></br>
                            <input type='text' value={title} placeholder='Enter Your Todo ' name='title' onChange={(e) => setTitle(e.target.value)}></input>
                        </div>

                        <div className="disc">
                            <label htmlFor='Describation'>Description</label>
                            <br></br>
                            <input type='text' value={dis} placeholder='About your Todo' name='dis ' onChange={(e) => setDis(e.target.value)}></input>
                        </div>
                        <div>
                            <button>Add</button>
                        </div>
                    </div>
                </form>

                <h2 className='h2'>Task</h2>
                <div className="todo-div">
                       
                    {alltodo.map((data, i) => {
                        return (

                            <div className="iteam-list" key={i}>


                                <ul>
                                    <li>
                                        <h2>{data.tit}</h2>
                                        <p> {data.discr}
                                            <br></br>
                                            {date.toString()}</p>
                                        <button className='btn' onClick={() => deleteTodo(i)}>-</button>
                                        <button className='btn' onClick={() => doneTask(i)}>D</button>
                                        <button className='btn' onClick={() => editTodo(i)}>E</button>
                                    </li>
                                </ul>


                            </div>

                        )
                    })}
                    <div className="second-container">
                        <h2>Completed Task</h2>
                        <Done completeddata={completed} />
                    </div>

                </div>

            </div>
        </div>

    )
}

