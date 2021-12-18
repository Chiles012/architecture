
export const save =
    (item, data) => 
        localStorage.setItem(item, data);

export const remove =
    item => 
        localStorage.removeItem(item);

export const get =
    item => 
        localStorage.getItem(item);
