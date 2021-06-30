import {
    currentSchedule,
    trainerById1,
    trainerById2,
    trainerById3,
    listHomework,
    studentsByTraining,
    votes,
    scheduleByBootcamp
} from "../sampleData";

export const api = {
    getLogin: () => {
        return true;
    },
    getCurrentSchedule: () => {
        return currentSchedule;
    },
    getTrainer: (id) => {
        if (id === 1) return trainerById1;
        else if (id === 2) return trainerById2;
        else if (id === 3) return trainerById3;
        else return trainerById1;
    },
    getListHomework: () => {
        return listHomework;
    },
    getStudentsByTraing: (id) => {
        if (id) return studentsByTraining;
    },
    getVotes: () => {
        return votes;
    },
    getScheduleByBootCamp: (id) => {
        if (id) return scheduleByBootcamp
    },
    getTrainers: () => {
        return ["Miguel Romero", "Juan Crisóstomo", "Angel Pantoja"];
    }
}