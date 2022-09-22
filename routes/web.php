<?php

use Illuminate\Auth\Events\Login;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::redirect('/','/prototype/login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('prototype')->name('prototype.')->group(function(){
    Route::get('/login', function(){
        return Inertia::render('Prototype/Login');
    })->name('login');

    Route::get('/register', function(){
        return Inertia::render('Prototype/Register');
    })->name('register');
});

require __DIR__.'/auth.php';
