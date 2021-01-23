import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";

function Understanding () {

    const history = useHistory();
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState();


    

    const handleClick = () => {
        console.log('clicked')
        const review = {
            understanding
        }
        console.log('review', review)
        //if (input{type} === '') {
        //    swal("hello");
       // } else {
        //    cart.push
          dispatch({ type: 'GET_UNDERSTANDING', payload: review })
          
            history.push('/support');
        //}
    }



    return (
        <>
            <form>

                <h2>How well are you understanding the content?</h2>

            <h3>Enter 1 - 10 with 10 being excellent.</h3>

            <input  type="number" 
            min="1" 
            max="10"
            onChange={(event) => setUnderstanding(event.target.value) }  
            />

            <button onClick={() => handleClick()} type="submit">NEXT</button>
        </form>
        </>
    )
    
}

export default Understanding