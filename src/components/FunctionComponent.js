import React,{useState} from 'react'

export default function FunctionComponent() {
    const [myList,setmyList] = useState(['first','second'])

    const addList = ()=> {
        const list = document.getElementById('listInput').value
        setmyList([...myList,list])
    }

    const clearList = ()=>{
        setmyList([])
    }
  
return (
    <div>
        <h3>My List</h3>
        <button onClick={clearList}>Clear List</button>
        <ul>
            {myList.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
        <input type="text" placeholder='Insert Your List' id ="listInput"/><br />
        <button onClick={addList}>Add List</button>
    </div>
  )
}
