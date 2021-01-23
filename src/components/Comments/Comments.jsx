import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function Comments (){

    const history = useHistory();
    const dispatch = useDispatch();
    const [comments, setComments] = useState();


    

    const handleClick = () => {
        console.log('clicked')
        const review = {
            comments
        }
        console.log('review', review)
        //if (input{type} === '') {
        //    swal("hello");
       // } else {
        //    cart.push
          dispatch({ type: 'GET_COMMENTS', payload: review })
          
            //history.push('/review');
        //}
    }



    return (
        <>
            <form>

                <h2>Any comments you want to leave?</h2>

            <h5>Comments</h5>

            <input  type="text" 
            
            onChange={(event) => setComments(event.target.value) }  
            />

            <button onClick={() => handleClick()} type="submit">NEXT</button>
        </form>
        </>
    )

}

export default Comments