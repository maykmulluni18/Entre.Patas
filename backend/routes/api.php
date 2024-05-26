<?php

use App\Http\Controllers\TypeRaceController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::get('oficios/list/', [OficioController::class, 'indexInforme'])->name('oficios.indexInforme');


Route::get('tipo_raza', [TypeRaceController::class, 'index'])->name('tipo_raza.index');
Route::post('tipo_raza', [TypeRaceController::class, 'create'])->name('tipo_raza.create');
Route::put('tipo_raza', [TypeRaceController::class, 'update'])->name('tipo_raza.update');
