// Sample data with back-end examples.
function getId() {
  return Math.floor(Math.random() * 100) * Date.now();
}
/*
 * Here we assume that the course is already created.
 * It will be assumed that id = 1 is for UI and id = 2 is for Java
 * Students by id Training(GET) (Status code :200) = /studentsByTraining/{idTraining}
 */

export const studentsByTraining = [
  {
    id: getId(),
    email: "student@students.com",
    firstName: "Alejandra",
    lastName: "Gutierrez",
    location: "CDMX",
    summary: "Es muy cool",
    training: 1,
    status: true,
  },
  {
    id: getId(),
    email: "student@students.com",
    firstName: "Atziri",
    lastName: "Perez",
    location: "CDMX",
    summary: "Es muy cool",
    training: 1,
    status: true,
  },
  {
    id: getId(),
    email: "student@students.com",
    firstName: "Gisela",
    lastName: "Camacho",
    location: "CDMX",
    summary: "Es muy cool",
    training: 1,
    status: true,
  },
  {
    id: getId(),
    email: "student@students.com",
    firstName: "Jorge",
    lastName: "Monterrosas",
    location: "CDMX",
    summary: "Es muy cool",
    training: 1,
    status: true,
  },
  {
    id: getId(),
    email: "student@students.com",
    firstName: "Talía",
    lastName: "González",
    location: "CDMX",
    summary: "Es muy cool",
    training: 1,
    status: true,
  },
  {
    id: getId(),
    email: "student@students.com",
    firstName: "Victor",
    lastName: "Cruz",
    location: "CDMX",
    summary: "Es muy cool",
    training: 1,
    status: true,
  },
];

/*
 * Read trainer by id(GET) (Status code:200) = /trainers/{idTrainer}
 */
export const trainerById1 = {
  id: getId(),
  email: "trainer@training.com",
  firstName: "Miguel",
  lastName: "Romero",
  location: "CDMX",
  summary: "Es muy cool",
  training: {
    id: getId(),
    training: "Bootcamp-UI",
    description: "Es muy cool",
    initialDate: "01-06-21",
    finalDate: "30-06-21",
  },
};

export const trainerById2 = {
  id: getId(),
  email: "trainer@training.com",
  firstName: "Juan",
  lastName: "Crisóstomo",
  location: "CDMX",
  summary: "Es muy cool",
  training: {
    id: getId(),
    training: "Bootcamp-UI",
    description: "Es muy cool",
    initialDate: "01-06-21",
    finalDate: "30-06-21",
  },
};

export const trainerById3 = {
  id: getId(),
  email: "trainer@training.com",
  firstName: "Juan",
  lastName: "Crisóstomo",
  location: "CDMX",
  summary: "Es muy cool",
  training: {
    id: getId(),
    training: "Bootcamp-UI",
    description: "Es muy cool",
    initialDate: "01-06-21",
    finalDate: "30-06-21",
  },
};

/*
 * getCurrentSchedule endpoint
 */

export const currentSchedule = {
  id: getId(),
  day: 1,
  topic: "CSS",
  date: "01-06-2021",
  summary: [
    "Qué es CSSOM y su importancia.",
    "Qué son los selectores y su especificidad.",
    "Cómo declarar los estilos en una hoja de estilos.",
    "Propiedades para realizar layouting.",
    "Flexbox.",
    "Grid CSS.",
  ],
  id_Trainer: 1,
  id_training: 1,
};

export const scheduleByBootcamp = [
    {
        id : getId(),
        day : 1,
        topic : "CSS",
        date : "22-06-2021",
        summary : "Aprenderemos que es CSS",
        id_trainer : 1,
        id_training : 2
    }, 
    {
        id : getId(),
        day : 2,
        topic : "HTML Semántico",
        date : "22-06-2021",
        summary : "Veremos HTML",
        id_trainer : 2,
        id_training : 2
    },
    {
        id : getId(),
        day : 3,
        topic : "Js Basics",
        date : "23-06-2021",
        summary : "El día de hoy veremos Js Basics",
        id_trainer : 1,
        id_training : 2
    },
    {
        id : getId(),
        day : 4,
        topic : "CSS",
        date : "22-06-2021",
        summary : "Aprenderemos que es CSS",
        id_trainer : 1,
        id_training : 2
    }, 
    {
        id : getId(),
        day : 5,
        topic : "HTML Semántico",
        date : "22-06-2021",
        summary : "Veremos HTML",
        id_trainer : 2,
        id_training : 2
    },
    {
        id : getId(),
        day : 6,
        topic : "Js Basics",
        date : "23-06-2021",
        summary : "El día de hoy veremos Js Basics",
        id_trainer : 1,
        id_training : 2
    }
]

/*
 * getVotesInPercentage
 */

export const votes = {
  totalVotes: 22,
  like: 90,
  dislike: 10,
};

/*
 * List Homework by student id. Includes homework task and feedback .Supply day and student id
 */

export const listHomework = [
  {
    id: getId(),
    homeworkName: "Ejercicios CSS",
    feedback: "Buen trabajo, completaste todos los ejercicios a tiempo.",
    homeworkLink: "https://flukeout.github.io/",
    id_schedule: 1,
    id_student: 0,
  },
  {
    id: getId(),
    homeworkName: "Magazine Layout",
    feedback:
      "Buen Trabajo en la revista, se puede mejorar ciertos aspectos en cuanto a la limpieza e identación del código. Puntos buenos: 1. Semántica bien aplicada 2. Estilos funcionan correctamente 3. Diseño responsivo Puntos a mejorar: 1. Limpieza en el código 2. Nombres de clases en estilos",
    homeworkLink:
      "https://codesandbox.io/s/strange-microservice-3bhbf?file=/styles.css",
    id_schedule: 2,
    id_student: 0,
  },
  {
    id: getId(),
    homeworkName: "CodeWars Katas",
    feedback:
      "Buen Trabajo en tus ejercicios, podrías mejorar viendo los siguientes recursos",
    homeworkLink: "https://www.codewars.com/ ",
    id_schedule: 3,
    id_student: 0,
  },
  {
    id: getId(),
    homeworkName: "Funcion que muestra la estructura del HTML",
    feedback:
      "Buena estructura pero no funcionó como debía. El objetivo de la tarea es que ustedes mismos se den cuenta que el html que hicieron o sus compañeros es complicado de leer por un tercero",
    homeworkLink: "",
    id_schedule: 3,
    id_student: 0,
  },
  {
    id: getId(),
    homeworkName: "Sliding Puzzle",
    feedback:
      "Buen trabajo, en tus próximos códigos intenta usar programación funcional.",
    homeworkLink: "",
    id_schedule: 4,
    id_student: 0,
  },
  {
    id: getId(),
    homeworkName: "Calculadora",
    feedback:
      "Buen trabajo, podrías mejorar poniendo nombres de variables con un nombre significativo",
    homeworkLink:
      "https://codesandbox.io/s/javascript-functions-t0pc0?file=/src/index.js",
    id_schedule: 5,
    id_student: 0,
  },
  {
    id: getId(),
    homeworkName: "Guess the movie",
    feedback:
      "Buen trabajo, intenta leer la documentación de React para que aprendas más sobre los temas vistos en clase.",
    homeworkLink: "",
    id_schedule: 7,
    id_student: 0,
  },
  {
    id: getId(),
    homeworkName: "Cambiar componente de Class a Function",
    feedback:
      "Buen trabajo, lee un poco más acerca del ciclo de vida del componente",
    homeworkLink: "https://codepen.io/luribeto/pen/JKjVPE?editors=1010",
    id_schedule: 7,
    id_student: 0,
  },
  {
    id: getId(),
    homeworkName: "Proyecto Final - Desarrollo de aplicación",
    feedback:
      "Buen trabajo, tus compañeros y tu lo hicieron muy bien. Procura leer más de trunk based development para que lo apliques en próximos proyectos",
    homeworkLink:
      "https://www.figma.com/file/U98m83oTa1GJLBTWMj9G1b/Bootcamp-Globant?node-id=2%3A0",
    id_schedule: 9,
    id_student: 0,
  },
];
