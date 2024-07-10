<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('report_losses', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('imagen')->nullable();
            $table->string('name');
            $table->integer('age');
            $table->string('sex');
            $table->string('color');
            $table->text('description')->nullable();
            $table->string('telefono')->nullable();
            $table->date('date_end')->nullable();
            $table->string('state');
            $table->boolean('low')->default(1);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('report_losses');
    }
};
