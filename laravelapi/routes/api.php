<?php

use App\Http\Controllers\CommentController;
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





//post
Route::get('post',[PostController::class , 'index']);
Route::post('post',[PostController::class , 'store']);
Route::put('post',[PostController::class , 'store']);
Route::get('join',[PostController::class , 'join']);
Route::get('userprofile',[PostController::class , 'userProfile']);
// http://127.0.0.1:8000/api/userprofile
Route::post('join',[PostController::class , 'join']);
// http://127.0.0.1:8000/api/join
Route::get('single_post/{id}' ,[PostController::class ,'single_post' ]);
// http://127.0.0.1:8000/api/post/1

// http://127.0.0.1:8000/api/post/1

//comments routes
Route::post('comment',[CommentController::class, 'store']);
Route::get('comment',[CommentController::class, 'index']);
Route::get('comment/{id}',[CommentController::class, 'show']);


// *****************Admin Router ********************
Route::get('/Users',[UserController::class , 'Users']);
Route::delete('/deleteUsers/{id}', [UserController::class,'destroy']);

Route::get('/Posts',[PostController::class , 'Posts']);
Route::delete('/deletePost/{id}', [PostController::class,'destroy']);

Route::post('/addUser', [UserController::class, 'addUser']);
Route::post('/addUser', [UserController::class, 'addUser']);
Route::get('/Comments',[CommentController::class , 'Comments']);
Route::delete('/deleteComment/{id}', [CommentController::class,'destroy']);