import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDetails } from '../redux/action'

export default function useInitState(name) {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDetails(name))
    }, [])
    const initState = useSelector((state) => state.vahakDetails);
    return initState;
}