import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import Review from "../Review/Review";


function Feelings() {


    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState();


    

    const handleClick = () => {
        console.log('clicked')
        const review = {
            feeling
        }
        console.log('review', review)
        //if (input{type} === '') {
        //    swal("hello");
       // } else {
        //    cart.push
          dispatch({ type: 'GET_FEELING', payload: review })
          
            history.push('/understanding');
        //}
    }



    return (
        <>
            <form>

                <h2>How are you feeling today?</h2>

            <h3>Enter 1 - 10 with 10 being excellent.</h3>

            <input  type="number" 
            min="1" 
            max="10"
            onChange={(event) => setFeeling(event.target.value) }  
            />

            <button onClick={() => handleClick()} type="submit">NEXT</button>
        </form>
        </>
    )

}

export default Feelings