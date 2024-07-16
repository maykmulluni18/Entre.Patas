const URI = "http://127.0.0.1:8000/api/";
//const URI = "http://64.227.8.193:8081/api/";
//PARA VERIMAGENES
//php artisan storage:link
export const Api_LOGIN = URI + "login";

export const apiListQuestions = URI + "questions";

export const apiMascota = URI + "mascotas";
export const getIdApiMascota = URI + "show_mascotas/";
export const postApiMascota = URI + "mascotas";
export const putApiMascota = URI + "mascotas/";
export const enableApiMascota = URI + "mascotas/enable/";
export const disableApiMascota = URI + "mascotas/disable/";
export const listEnableApiMascota = URI + "list_mascotas_enable";

export const apiPostUserAdoption = URI + "user_adoptions";

export const apiPostAnswer = URI + "answer_adoptions";
export const getApiIdPostAnswer = URI + "answer_adoptions/";

export const adoptions_generate = URI + "adoptions_generate";

export const postPetState = URI + "state_mascotas/";

export const postPostContact = URI + "contacts";

export const postDonation = URI + "donations";

export const postApiReportLoos = URI + "report_loss";

export const getApiListReport = URI + "report_loss_enable"

export const postLoginUsers = URI + "loginUsers"