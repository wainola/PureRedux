
// Fetching the data
let initialState = {
    data: []
};

// fetch('../../data/data.json')
// .then((response) => response.json())
// .then(data => {
//     data.forEach((elemento) => {
//         initialState.data.push(elemento);
//     });
// });

//console.log(initialState);

export default function(state=initialState.data, action){
    switch(action.type){
        case "ADD_DATA":
            console.log(action.payload);
    }
    return state;
}