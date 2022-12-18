import React, {useState} from 'react';

const InputText = () => {
    const [inputVal, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <input type='text' name='text' placeholder={'Enter your TODO'}  value={inputVal} onChange={handleChange}></input>
        </div>
    );
};
export default InputText;