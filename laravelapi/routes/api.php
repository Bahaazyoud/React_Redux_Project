<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\PostController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//login-register

Route::post('register', [UserController::class, 'registerAPI']);
// http://127.0.0.1:8000/api/register
Route::post('login', [UserController::class, 'loginAPI']);
// http://127.0.0.1:8000/api/login

//updait-profile
Route::get('users/{id}',[UserController::class , 'getInfo']);
// http://127.0.0.1:8000/api/users/1
Route::post('update/{id}',[UserController::class , 'update']);
Route::get('getuser/{id}',[UserController::class , 'getUser']);


Route::get('Users',[UserController::class , 'Users']);



Route::delete('/deleteUsers/{id}', [UserController::class,'destroy']);



//post
Route::get('post',[PostController::class , 'index']);
Route::post('post',[PostController::class , 'store']);
// http://127.0.0.1:8000/api/post
Route::get('single_post/{id}' ,[PostController::class ,'single_post' ]);
// http://127.0.0.1:8000/api/post/1