<?php

namespace App\Http\Controllers;

use App\Models\AdoptionQuestionnaire;
use Illuminate\Http\Request;
use App\Models\PetType;
use Illuminate\Support\Facades\Validator;

class QuestionnaireController extends Controller
{
    //
    public function index()
    {
        try {
            $TypeRace = AdoptionQuestionnaire::all();
            return response()->json(['data' => $TypeRace], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            // 'low' //estado
            // Agrega más reglas de validación según sea necesario
        ]);

        try {
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            $validatedData = $validator->validated();
            $typePet = AdoptionQuestionnaire::create($validatedData);
            return response()->json(['message' => 'TypeRace created successfully', 'tipo de mascota' => $typePet], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
