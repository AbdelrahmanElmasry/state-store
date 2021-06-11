export const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('the action :',action)
        const result = next(action);
        console.log('The new state : ',store.getState());
    console.groupEnd()
    return result;
}