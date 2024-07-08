<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('adoption_questionnaires', function (Blueprint $table) {
            $table->id();
            $table->string('question')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     * php artisan make:model AdoptionQuestionnaire

     */
    public function down(): void
    {
        Schema::dropIfExists('adoption_questionnaires');
    }
};
