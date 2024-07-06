import ToDoApp from "../ToDoApp";
import BulletListApp from "../BulletListApp.js";
import { useState } from "react";


export function Home() {

    const [list, setList] = useState(0)

    function ListType(listType) {

        setList(listType)
    }


    switch (list) {
        case 1:
            return (
                <>
                    <ToDoApp />
                    <button className='list-btn' onClick={() => ListType(0)}  >Home</button>
                </>
            )

        case 2:
            return (
                <>
                    <BulletListApp />
                    <button className='list-btn' onClick={() => ListType(0)}  >Home</button>
                </>
            )


        default:
            return (
                <div className="home-wrapper">
                    <h1 className="home-header">Choose a List</h1>
                    <div className="home-btns">
                    <button className='list-btn' onClick={() => ListType(1)}  >To-do list</button>
                    <button className='list-btn' onClick={() => ListType(2)}  >Bullet list</button>
                    </div>
                </div>
            )

    }
}
