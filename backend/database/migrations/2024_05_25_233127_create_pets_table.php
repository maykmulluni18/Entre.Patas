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
        Schema::create('pets', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->integer('age');
            $table->string('sex');
            $table->string('color');
            $table->string('imagen')->nullable();
            $table->text('description')->nullable();
            $table->date('date_end')->nullable();
            $table->string('tamanio')->nullable();
            $table->string('peso')->nullable();
            $table->boolean('sterilized')->default(false);
            $table->boolean('vaccination')->default(false);
            $table->string('state');

            $table->string('pet_type_id')->nullable();
            $table->string('type_race_id')->nullable();

            $table->foreign('pet_type_id')->references('id')->on('pet_types')
            ->onDelete('set null');

            $table->foreign('type_race_id')->references('id')->on('type_races')
            ->onDelete('set null');

            $table->boolean('low')->default(1);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pets');
    }
};
