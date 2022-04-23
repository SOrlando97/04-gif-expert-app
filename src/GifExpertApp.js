import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () =>{

    //const categories = ['One Punch','Samurai X', 'Dragon Ball'];    
    // const handleAdd = () =>{
    //     //los 3 puntos es para decirle que deje lo que hay anterior 
    //     //setcategories([...categories,'Inuyasha']);
    //     setcategories(cast =>[...cast,'Inuyasha']);    
    // }
    const [categories, setcategories] = useState(['One Punch'])
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories = { setcategories }/>
            <hr />
            <ol>
                {
                    //map es una clase de for que va uno por uno de lo que le das
                    categories.map((category) =>
                        <GifGrid 
                        key={category}
                        category= { category }/>
                    )
                }
            </ol>
        </>
    )
    

}