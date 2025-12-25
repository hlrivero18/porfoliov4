const initialState = {
    menu: [
        {name: "Proyectos", route: "/proyect"}, 
        {name: "Experiencia", route: "/experience"}, 
        {name: "Certificaciones", route: "/certifications"}
    ],
    contact:[
        {name: "Github", route: "/proyect"}, 
        {name: "LinkedIn", route: "/experience"}, 
        {name: "Gmail", route: "/certifications"},

    ] 
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type) {
        default: return state
    }
}

export default rootReducer