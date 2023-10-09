// REMEMBER TO PSEUDOCODE
const pad = (array, minSize, value=null) => {
     if (array.length <= minSize){
        return array;
    } 
    
    let newArrayWithPadding = [...array]
    
    let padding = minSize - array.length;

    for (let i = 0; i < padding; i++){
        newArrayWithPadding.push(value);
    }

    return newArrayWithPadding;

}

exports.pad = pad;
