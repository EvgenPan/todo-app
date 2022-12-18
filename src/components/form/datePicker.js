import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const TableDatePicker = () => {
    const [startDate, setStartDate] = useState(null);
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            showDisabledMonthNavigation
            placeholderText="Assign a deadline"
            isClearable
        />
    );
};
export default TableDatePicker;