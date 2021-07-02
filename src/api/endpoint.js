export const URL = "http://proyectofinalbootcamp-env.eba-nmb4rsib.us-east-2.elasticbeanstalk.com/";

export const config = {
  get: (methodVerb, endpoint, param) => {
    return {
      method: methodVerb,
      url: `${URL}${endpoint}${param}`,
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
    };
  },
  login: (mail, password, trainer) => {
    return {
      method: 'post',
      url: `${URL}${trainer}/login?email=${mail}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'accept': '*/*'
      }
    };
  },
}

export const payload = {
  updateProfile: (initialData, newName, newLastName, newTextValue) => {
    return {
      id: initialData.id,
      firstName: newName,
      lastName: newLastName,
      email: initialData.email,
      location: initialData.location,
      summary: newTextValue,
      urlImage: initialData.urlImage,
      training: {
        id: initialData.training.id,
        trainingName: initialData.training.trainingName,
        status: initialData.training.status,
        initialDate: initialData.training.initialDate,
        finalDate: initialData.training.finalDate,
      },
      status: initialData.status,
    };
  }
}