<?php

use App\Http\Controllers\InputController;
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

Route::prefix('/input')->group(function () {
    Route::get('/', [InputController::class, 'list']);
    Route::get('/{id}', [InputController::class, 'list']);
    Route::post('/', [InputController::class, 'create']);
    Route::delete('/{id}', [InputController::class, 'delete']);
    Route::put('/{id}', [InputController::class, 'update']);
});
