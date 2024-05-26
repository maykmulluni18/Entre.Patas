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
        Schema::create('sponsorships', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('imagen')->nullable();
            $table->text('description')->nullable();
            $table->date('date');
            $table->string('user_adop_spon_id')->nullable();
            $table->string('pet_id')->nullable();
            $table->foreign('user_adop_spon_id')->references('id')->on('user_adoption_sponsorships')
            ->onDelete('set null');
            $table->foreign('pet_id')->references('id')->on('pets')
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
        Schema::dropIfExists('sponsorships');
    }
};
