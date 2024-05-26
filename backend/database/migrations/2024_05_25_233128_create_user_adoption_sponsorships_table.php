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
        Schema::create('user_adoption_sponsorships', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('fullname');
            $table->string('email')->unique();
            $table->string('phone');
            $table->string('direction');
            $table->boolean('low')->default(1); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_adoption_sponsorships');
    }
};
