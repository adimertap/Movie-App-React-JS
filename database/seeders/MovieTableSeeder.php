<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $movies = [
            [
                'name' => 'Spiderman No-Way-Home',
                'slug' => 'spiderman-no-way-home',
                'category' => 'Action',
                'video_url' => 'https://youtu.be/JfVOs4VSpmA',
                'thumbnail' => 'https://gizmostory.com/wp-contenTt/uploads/2021/05/Spider-Man-No-Way-Home.jpg',
                'rating' => 9.3,
                'is_featured' => 1,

            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Action',
                'video_url' => 'https://youtu.be/UaVTIH8mujA',
                'thumbnail' => 'https://bleedingcool.com/wp-content/uploads/2020/10/The-Godfather-Vito-Corleone-Statue-003.jpg',
                'rating' => 7.3,
                'is_featured' => 0,
            ],
            [
                'name' => 'Moon Knight',
                'slug' => 'moon-knight',
                'category' => 'Action',
                'video_url' => 'https://youtu.be/x7Krla_UxRg',
                'thumbnail' => 'https://i.pinimg.com/736x/8e/fd/9d/8efd9db4225fbdab92c4023d70f6d7b8.jpg',
                'rating' => 8.5,
                'is_featured' => 0,
            ]
        ];

        Movie::insert($movies);
    }
}
