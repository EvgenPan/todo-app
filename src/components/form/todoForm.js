import React, {useState} from 'react';
import './todoForm.css'
import ButtonForm from "./buttonForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const TodoForm = ({createTodo}) => {
    const [startDate, setStartDate] = useState(null);
    const [inputVal, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if(startDate === null){
            return
        }
        createTodo({
            task:inputVal,
            date:startDate.toLocaleDateString()
        });
        setInput('');
        setStartDate(null)

    }
    return (
        <div className='form-wrapper'>
            <form onSubmit={handleSubmit}>
                   <div><input type='text' name='text' placeholder={'Enter your TODO'}  value={inputVal} onChange={handleChange}></input></div>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    showDisabledMonthNavigation
                    placeholderText="Assign a deadline"
                    isClearable

                />
                <ButtonForm/>
            </form>
        </div>
    );
};
export default TodoForm;