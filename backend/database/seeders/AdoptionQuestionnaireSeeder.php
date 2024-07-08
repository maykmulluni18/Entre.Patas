<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdoptionQuestionnaireSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $questions = [
            [
                'question' => '¿Por qué estás interesado en adoptar una mascota en este momento?',
                'options' => ['a', 'b', 'c'],
            ],
            [
                'question' => '¿Tienes alguna experiencia previa en la adopción o cuidado de mascotas?',
                'options' => ['a', 'b', 'c'],
            ],
            [
                'question' => '¿Qué tipo de mascota estás buscando (perro, gato, otro)? ¿Por qué?',
                'options' => ['a', 'b', 'c'],
            ],
            [
                'question' => '¿Cuántas horas al día puedes dedicarle a tu mascota?',
                'options' => ['a', 'b', 'c'],
            ],
            [
                'question' => '¿Qué tipo de espacio tienes en tu hogar para la mascota?',
                'options' => ['a', 'b', 'c'],
            ],
            [
                'question' => '¿Cómo planeas ejercitar y socializar a tu mascota?',
                'options' => ['a', 'b', 'c'],
            ],
            [
                'question' => '¿Estás dispuesto/a a comprometerte con los gastos veterinarios y cuidados médicos de la mascota?',
                'options' => ['a', 'b', 'c'],
            ],
            [
                'question' => '¿Tienes niños en casa? ¿Cómo crees que la nueva mascota se adaptará a ellos?',
            ],
            [
                'question' => '¿Qué harías si la mascota presenta algún comportamiento no deseado?',
            ],
            [
                'question' => '¿Qué expectativas tienes sobre la relación con tu nueva mascota?',
            ],
        ];

        foreach ($questions as $questionData) {
            DB::table('adoption_questionnaires')->insert([
                'question' => $questionData['question'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

    }
}
