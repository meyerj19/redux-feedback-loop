import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";

function Support () {

    const history = useHistory();
    const dispatch = useDispatch();
    const [support, setSupport] = useState();


    

    const handleClick = () => {
        console.log('clicked')
        const review = {
            support
        }
        console.log('review', review)
        //if (input{type} === '') {
        //    swal("hello");
       // } else {
        //    cart.push
          dispatch({ type: 'GET_SUPPORT', payload: review })
          
            //history.push('/comments');
        //}
    }



    return (
        <>
            <form>

                <h2>How well are you being supported?</h2>

            <h3>Enter 1 - 10 with 10 being excellent.</h3>

            <input  type="number" 
            min="1" 
            max="10"
            onChange={(event) => setSupport(event.target.value) }  
            />

            <button onClick={() => handleClick()} type="submit">NEXT</button>
        </form>
        </>
    )

}

export default Support