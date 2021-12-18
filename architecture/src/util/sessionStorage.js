
export const save = 
    (item, data) => 
        sessionStorage.setItem(item, data);

export const remove =
    item => 
        sessionStorage.removeItem(item)

export const get =
    item => 
        sessionStorage.getItem(item);
