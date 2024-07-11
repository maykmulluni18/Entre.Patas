<?php

use App\Http\Controllers\AdoptionAnswerController;
use App\Http\Controllers\AdoptionController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\PetController;
use App\Http\Controllers\PetTypeController;
use App\Http\Controllers\QuestionnaireController;
use App\Http\Controllers\TypeRaceController;
use App\Http\Controllers\UserAdoptionSponsorshipController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('register', [UserController::class, 'register'])->name('register.register');
Route::post('login', [UserController::class, 'login'])->name('login:login');
Route::post('logout', [UserController::class, 'logout'])->middleware('auth:sanctum');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('tipos_mascotas', [PetTypeController::class, 'index'])->name('tipos_mascotas.index');
    Route::get('show_tipos_mascotas/{id}', [PetTypeController::class, 'show'])->name('show_tipos_mascotas.show');
    Route::post('tipos_mascotas', [PetTypeController::class, 'create'])->name('tipos_mascotas.create');
    Route::put('tipos_mascotas/{id}', [PetTypeController::class, 'update'])->name('tipos_mascotas.update');
    Route::patch('tipos_mascotas/disable/{id}', [PetTypeController::class, 'disable'])->name('tipos_mascotas.disable');
    Route::patch('tipos_mascotas/enable/{id}', [PetTypeController::class, 'enable'])->name('tipos_mascotas.enable');

    Route::get('tipos_razas', [TypeRaceController::class, 'index'])->name('tipos_razas.index');
    Route::get('show_tipos_razas/{id}', [TypeRaceController::class, 'show'])->name('show_tipos_razas.show');
    Route::post('tipos_razas', [TypeRaceController::class, 'create'])->name('tipos_razas.create');
    Route::put('tipos_razas/{id}', [TypeRaceController::class, 'update'])->name('tipos_razas.update');
    Route::patch('tipos_razas/disable/{id}', [TypeRaceController::class, 'disable'])->name('tipos_razas.disable');
    Route::patch('tipos_razas/enable/{id}', [TypeRaceController::class, 'enable'])->name('tipos_razas.enable');
    Route::get('list_tipos_razas_enable', [TypeRaceController::class, 'listEnableTypeRace'])->name('list_tipos_razas_enable.listEnableTypeRace');

    Route::get('mascotas', [PetController::class, 'index'])->name('mascotas.index');
    Route::get('show_mascotas/{id}', [PetController::class, 'show'])->name('show_mascotas.show');
    Route::post('mascotas', [PetController::class, 'create'])->name('mascotas.create');
    Route::post('mascotas/{id}', [PetController::class, 'update'])->name('mascotas.update');
    Route::patch('mascotas/disable/{id}', [PetController::class, 'disable'])->name('mascotas.disable');
    Route::patch('mascotas/enable/{id}', [PetController::class, 'enable'])->name('mascotas.enable');
    Route::patch('state_mascotas/{id}', [PetController::class, 'updateState'])->name('state_mascotas.updateState');


});

//Route::get('oficios/list/', [OficioController::class, 'indexInforme'])->name('oficios.indexInforme');


// Route::get('tipo_raza', [TypeRaceController::class, 'index'])->name('tipo_raza.index');
// Route::post('tipo_raza', [TypeRaceController::class, 'create'])->name('tipo_raza.create');
// Route::put('tipo_raza', [TypeRaceController::class, 'update'])->name('tipo_raza.update');

Route::get('questions', [QuestionnaireController::class, 'index'])->name('questions.index');
Route::post('userAditions', [UserAdoptionSponsorshipController::class, 'create'])->name('userAditions.create');
Route::post('questionsAditions', [QuestionnaireController::class, 'create'])->name('questionsAditions.create');


Route::get('list_tipos_mascotas_enable', [PetTypeController::class, 'listEnableTypePet'])->name('list_tipos_mascotas_enable.listEnableTypePet');





Route::get('list_mascotas_enable', [PetController::class, 'listEnablePet'])->name('list_mascotas_enable.listEnablePet');

//Route::get('mascotas/search/{name}', [PetController::class, 'searchByName'])->name('mascotas.searchByName');
Route::get('contacts', [ContactController::class, 'index'])->name('contacts.index');
Route::post('contacts', [ContactController::class, 'create'])->name('contacts.create');

Route::get('user_adoptions', [UserAdoptionSponsorshipController::class, 'index'])->name('user_adoptions.index');
Route::post('user_adoptions', [UserAdoptionSponsorshipController::class, 'create'])->name('user_adoptions.create');


Route::post('answer_adoptions', [AdoptionAnswerController::class, 'create'])->name('answer_adoptions.create');
Route::get('answer_adoptions/{id}', [AdoptionAnswerController::class, 'indexAnswer'])->name('answer_adoptions.indexAnswer');

Route::post('adoptions_generate', [AdoptionController::class, 'create'])->name('adoptions_generate.reate');


Route::get('adoptions', [AdoptionController::class, 'index'])->name('adoptions.index');

//donation
Route::get('donations', [DonationController::class, 'index'])->name('donations.index');
Route::post('donations', [DonationController::class, 'create'])->name('donations.create');
// Route::get('donations/{id}', [DonationController::class, 'show'])->name('donations.show');
// Route::put('donations/{id}', [DonationController::class, 'update'])->name('donations.update');
// Route::patch('donations/{id}', [DonationController::class, 'destroy'])->name('donations.destroy');
// Route::get('donations/user/{id}', [DonationController::class, 'showByUser'])->name('donations.showByUser');


