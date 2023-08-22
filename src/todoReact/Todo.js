import React, { useEffect, useState } from 'react'


const getLocalData = () => {
    const lists = localStorage.getItem("TodoList");
    if (lists) {
        return JSON.parse(lists)
    } else {
        return [];
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEdititem] = useState("")
    const [toggleButton, setToggleButton] = useState(false)

    const addItem = () => {
        if (!inputData) {
            alert("plz fill data");
        }
        else if (inputData && toggleButton) {
            setItems(
                items.map((cur) => {
                    if (cur.id === isEditItem) {
                        return { ...cur, name: inputData }
                    }
                    return cur;
                })
            )
            setInputData("");
            setIsEdititem(null)
            setToggleButton(false);
        }
        else {
            const newData = {
                id: new Date().getTime().toString(),
                name: inputData,
            };
            setItems([...items, newData]);
            setInputData("")
        }
    }

    const deleteItem = (index) => {
        const updatedItems = items.filter((cur) => {
            return cur.id !== index;
        });
        setItems(updatedItems);
    }

    const removeAll = () => {
        setItems([]);
    }

    useEffect(() => {
        localStorage.setItem("TodoList", JSON.stringify(items))
    }, [items])


    const editItems = (index) => {
        const itemEdited = items.find((cur) => {
            return cur.id === index;
        });
        setInputData(itemEdited.name)
        setIsEdititem(index);
        setToggleButton(true);

    }
    return (

        <div className='main'>

            <div className="child">

                <div className="bg">


                    <h2>TODO APP</h2>
                    <p>Add Your Task Here</p>
                    <div className='addItems'>
                        <input type='text' placeholder='Add Item' className='form-input' value={inputData}
                            onChange={(e) => {
                                setInputData(e.target.value)
                            }} />{toggleButton ? (
                                <i className="fa-solid fa-pen-to-square" id='icon' onClick={addItem}></i>) : (
                                <i className="fa-solid fa-plus" id='icon' onClick={addItem}></i>
                            )}

                    </div>
                    <div className='show' >
                        {items.map((cur) => {
                            return (
                                <div id="eachlist" className="eachlist" key={cur.id}>
                                    <input type="checkbox" id="list1" name="list1" className='list1' />
                                    <label for="list1">
                                        <h4>{cur.name}</h4>
                                        <div className="todo-btn">
                                            <i class="fa-solid fa-pen-to-square" id='icon' onClick={() => { editItems(cur.id) }}></i>
                                            <i class="fa-solid fa-trash-can" id='delete-icon' onClick={() => deleteItem(cur.id)}></i>
                                        </div>
                                    </label>
                                </div>
                            )
                        })}

                    </div>

                    <div className="show">
                        <button className='btn' onClick={removeAll}>Delete All</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Todo;