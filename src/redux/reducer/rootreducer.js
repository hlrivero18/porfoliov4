const initialState = {
    menu: [
        {name: "Proyectos", route: "/project"}, 
        {name: "Experiencia", route: "/experience"}, 
        {name: "Certificaciones", route: "/certifications"}
    ]
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type) {
        default: return state
    }
}

export default rootReducer