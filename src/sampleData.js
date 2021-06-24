// Sample data with back-end examples.

/*
* Here we assume that the course is already created.
* It will be assumed that id = 1 is for UI and id = 2 is for Java
* Students by id Training(GET) (Status code :200) = /studentsByTraining/{idTraining}
*/

export const studentsByTraining = [
    {
        id: 1,
        email: "student@students.com",
        firstName: "Alejandra",
        lastName: "Gutierrez",
        location: "CDMX",
        summary: "Es muy cool",
        training: 1,
        status: true
    },
    {
        id: 2,
        email: "student@students.com",
        firstName: "Atziri",
        lastName: "Perez",
        location: "CDMX",
        summary: "Es muy cool",
        training: 1,
        status: true
    },
    {
        id: 3,
        email: "student@students.com",
        firstName: "Gisela",
        lastName: "Camacho",
        location: "CDMX",
        summary: "Es muy cool",
        training: 1,
        status: true
    },
    {
        id: 4,
        email: "student@students.com",
        firstName: "Jorge",
        lastName: "Monterrosas",
        location: "CDMX",
        summary: "Es muy cool",
        training: 1,
        status: true
    },
    {
        id: 5,
        email: "student@students.com",
        firstName: "Talía",
        lastName: "González",
        location: "CDMX",
        summary: "Es muy cool",
        training: 1,
        status: true
    },
    {
        id: 6,
        email: "student@students.com",
        firstName: "Victor",
        lastName: "Cruz",
        location: "CDMX",
        summary: "Es muy cool",
        training: 1,
        status: true
    },
];

/*
* Read trainer by id(GET) (Status code:200) = /trainers/{idTrainer}
*/
export const trainerById1 = {
    id: 1,
    email: "trainer@training.com",
    firstName: "Miguel",
    lastName: "Romero",
    location: "CDMX",
    summary: "Es muy cool",
    training: {
        id: 1,
        training: "Bootcamp-UI",
        description: "Es muy cool",
        initialDate: "01-06-21",
        finalDate: "30-06-21",
    }
}

export const trainerById2 = {
    id: 2,
    email: "trainer@training.com",
    firstName: "Juan",
    lastName: "Crisóstomo",
    location: "CDMX",
    summary: "Es muy cool",
    training: {
        id: 1,
        training: "Bootcamp-UI",
        description: "Es muy cool",
        initialDate: "01-06-21",
        finalDate: "30-06-21",
    }
}

export const trainerById3 = {
    id: 2,
    email: "trainer@training.com",
    firstName: "Juan",
    lastName: "Crisóstomo",
    location: "CDMX",
    summary: "Es muy cool",
    training: {
        id: 1,
        training: "Bootcamp-UI",
        description: "Es muy cool",
        initialDate: "01-06-21",
        finalDate: "30-06-21",
    }
}

/*
* getCurrentSchedule endpoint
*/

export const currentSchedule = {
    id: 1,
    day: 1,
    topic: "CSS",
    date: "01-06-2021",
    summary: ["Qué es CSSOM y su importancia.", 
        "Qué son los selectores y su especificidad.", 
        "Cómo declarar los estilos en una hoja de estilos.", 
        "Propiedades para realizar layouting.", "Flexbox.", 
        "Grid CSS."],
    id_Trainer: 1,
    id_training: 1
}

/*
* getVotesInPercentage
*/

export const votes = {
    totalVotes: 22,
    like: 90,
    dislike: 10
}