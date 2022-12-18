import {put, takeEvery} from "redux-saga/effects"
import { ASYNC_ADD_TODO, ASYNC_DELETE_TODO, addCreator,deleteCreator} from "../store/todoReducer";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* addTodoWorker() {
    yield delay(1000)
    yield put(addCreator())
}

function* deleteTodoWorker() {
    yield delay(1000)
    yield put(deleteCreator())
}


export function* todoWatcher() {
    yield takeEvery(ASYNC_ADD_TODO, addTodoWorker)
    yield takeEvery(ASYNC_DELETE_TODO, deleteTodoWorker)
}
