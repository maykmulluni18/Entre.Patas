const URI = "http://127.0.0.1:8000/api/";
//PARA VERIMAGENES
//php artisan storage:link
export const Api_LOGIN = URI + "login";

export const apiListQuestions = URI + "questions";

export const apiTipoMascota = URI + "tipos_mascotas";
export const getIdApiTipoMascota = URI + "show_tipos_mascotas/";
export const postApiTipoMascota = URI + "tipos_mascotas";
export const putApiTipoMascota = URI + "tipos_mascotas/";
export const enableApiTipoMascota = URI + "tipos_mascotas/enable/";
export const disableApiTipoMascota = URI + "tipos_mascotas/disable/";
export const listEnableApiTipoMascota = URI + "list_tipos_mascotas_enable";

export const apiTipoRaza = URI + "tipos_razas";
export const getIdApiTipoRaza = URI + "show_tipos_razas/";
export const postApiTipoRaza = URI + "tipos_razas";
export const putApiTipoRaza = URI + "tipos_razas/";
export const enableApiTipoRaza = URI + "tipos_razas/enable/";
export const disableApiTipoRaza = URI + "tipos_razas/disable/";
export const listEnableApiTipoRaza = URI + "list_tipos_razas_enable";

export const apiMascota = URI + "mascotas";
export const getIdApiMascota = URI + "show_mascotas/";
export const postApiMascota = URI + "mascotas";
export const putApiMascota = URI + "mascotas/";
export const enableApiMascota = URI + "mascotas/enable/";
export const disableApiMascota = URI + "mascotas/disable/";
export const listEnableApiMascota = URI + "list_mascotas_enable";
