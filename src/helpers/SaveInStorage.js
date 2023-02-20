export const SaveInStorage = (key,item) => {
    // conseguir el valor del almacenamiento local
    let items = JSON.parse(localStorage.getItem(key));
    // Comprobar si es un array
    if(Array.isArray(items)){
        //Guardar en el array
        items.push(item);
                  
    }else{
        
        items = [item];
    }
    //Guardar en el local storage  
    localStorage.setItem(key, JSON.stringify(items));
    return item;
    
}