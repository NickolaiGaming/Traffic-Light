import React, { useState } from 'react';

const Luces = () => {

    
    const [selected, setSelected] = useState("")

    const changeColor=(color) => {
        setSelected(color)
        
    }


    return (
        <>
        <div className={`luzamarilla ${selected =="luzamarilla" ? "light-on" : ""}`}
        onClick={() => changeColor("luzamarilla")}
        >
        </div>
        <div className={`luzroja ${selected =="luzroja" ? "light-on" : ""}`}
        onClick={() => changeColor("luzroja")}
        >
        </div>
        <div className={`luzverde ${selected =="luzverde" ? "light-on" : ""}`} 
        onClick={() => changeColor("luzverde")}
        >
        </div>
        </>
    )
}

export default Luces;