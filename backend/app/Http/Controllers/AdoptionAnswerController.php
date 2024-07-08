<?php

namespace App\Http\Controllers;

use App\Models\AdoptionAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdoptionAnswerController extends Controller
{
    //
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'answer' => 'required',
            'user_adoption_sponsorship_id' => 'required',
            'adoption_questionnaire_id' => 'required',

            // 'low' //estado
            // Agrega más reglas de validación según sea necesario
        ]);
        try {
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            $data = $request->all();

            foreach ($data as $answerData) {
                AdoptionAnswer::create($answerData);
            }
            return response()->json(['message' => 'Answers created successfully'], 201);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
