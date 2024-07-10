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
        Schema::create('adoption_answers', function (Blueprint $table) {
            $table->id();
            $table->string('answer')->nullable();

            $table->string('user_adoption_sponsorship_id')->nullable();
            $table->foreign('user_adoption_sponsorship_id')->references('id')->on('user_adoption_sponsorships')
                ->onDelete('set null');

            $table->unsignedBigInteger('adoption_questionnaire_id')->nullable();
            $table->foreign('adoption_questionnaire_id')->references('id')->on('adoption_questionnaires')
                ->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('adoption_answers');
    }
};
