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


Route::prefix('/v1')->group(function () {

    Route::prefix('/transaction')->group(function () {
        Route::get('/{user_id}/{year}/{month}', [InputController::class, 'list']); //@Todo Create user authentication
        Route::get('/', [InputController::class, 'all']); //@Todo remove
        Route::get('/{id}', [InputController::class, 'find']);
        Route::post('/', [InputController::class, 'create']);
        Route::delete('/{id}', [InputController::class, 'delete']);
        Route::put('/{id}', [InputController::class, 'update']);
    });
});
