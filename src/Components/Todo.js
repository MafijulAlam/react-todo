import React, {useState, useEffect} from 'react'
import '../App.css'

const getLocalItems = () => {
    let list = localStorage.getItem('lists')
    console.log(list);
    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }else{
        return []
    }
}

const Todo = () => {

    const [inputData, setInputData] = useState( '' )
    const [items, setItems] = useState(getLocalItems())


    const addItem = () => {
        if(inputData.length > 0 ){
            setItems([...items, inputData])
            setInputData('')
        }else{
            alert('Please Enter Data')
        }
        
    }

    const deleteItem = (id) => {
        const updataData = items.filter( (cur, ind) =>{
            return(
                ind !==id
            )
        } )
        setItems(updataData)
    }

    

    useEffect(() => {
       localStorage.setItem('lists', JSON.stringify(items))
    }, [items])

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure className="figure">
                        
                        <figcaption> Add Todo List</figcaption>
                    </figure>
                   <div className='addItems'>
                        <input type="text" placeholder="Add items"
                        value={inputData}
                        onChange={ (e) => setInputData(e.target.value) }
                        />
                        <button className='add-btn' onClick={addItem} >Add</button>
                   </div>
                   <div className='showItems'>

                        {
                            items.map( (cur, ind) => {
                                return(

                                    <div className='eachItem' key={ind}>
                                    <h3>{cur}</h3>
                                    <button className='delete-btn' onClick={ () => deleteItem (ind)} >Delete</button>
                                     </div>
                                )
                            })
                        }

                       
                   </div>
                   

                </div>
            </div>
        </>
    )
}

export default Todo
