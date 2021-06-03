export const generateId = () =>{
    return Math.random().toString(36).substring(2) + ( new Date()).getTime().toString(36);
}

export function createRemoveButton(onClick){
    const removeBtn = document.createElement('button')
    removeBtn.innerText = 'X';
    removeBtn.addEventListener('click',onClick);
    return removeBtn;
}