import axios from "axios";
import { useEffect, useState } from "react"

const useData = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        axios.get('https://to-do-tauhid.herokuapp.com/tasks')
            .then(data => {
                setTasks(data.data)
            })

    }, [])
    return [tasks, setTasks];
}
export default useData;