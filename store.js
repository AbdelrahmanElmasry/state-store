export const createStore = (reducer) => {
    let state= {todos:[],goals:[]};

    let listeners = [];

    const getState = () => state;

    /**
     * update the state according to the passed action
     * and execute all listeners
     * @param {action} action 
     */
    const dispatch = (action) => {
        state = reducer(state,action);
        listeners.forEach(listener => listener());
    }
    /** 
     * add new  callback function to be called on very state change
     * 
     * @param listener - the callback to be executed on state change
     * 
     * @returns unsubscribe - stop listening to the state change */
    const subscribe = (listener) => {

        listeners = listeners.concat([listener]);

        return () => {
            listeners = listeners.filter(lis => lis !== listener);
        }
    }

    return { getState , subscribe , dispatch }
}