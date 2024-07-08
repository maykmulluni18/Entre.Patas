<?php

namespace App\Http\Controllers;

use App\Models\PetType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PetTypeController extends Controller
{
    //
    public function index()
    {
        try {
            $petType = PetType::all();
            return response()->json(['data' => $petType], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Crear un nuevo registro
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
            $typePet = PetType::create($validatedData);
            return response()->json(['message' => 'TypeRace created successfully', 'tipo de mascota' => $typePet], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Actualizar un registro existente
    public function update(Request $request, $id)
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

            $typePet = PetType::findOrFail($id);
            $typePet->update($validatedData);
            return response()->json(['message' => 'TypePet updated successfully', 'tipo de mascota' => $typePet], 201);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    // get

    public function show($id)
    {
        try {
            $typePet = PetType::findOrFail($id);
            return response()->json(['data' => $typePet], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    // Deshabilitar un registro
    public function disable($id)
    {
        try {
            $typePet = PetType::findOrFail($id);
            $typePet->update(['low' => 0]); // Asume que "low" es el campo de estado
            return response()->json(['message' => 'TypePet disabled successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Habilitar un registro previamente deshabilitado
    public function enable($id)
    {
        try {
            $typePet = PetType::findOrFail($id);
            $typePet->update(['low' => 1]); // Asume que "low" es el campo de estado
            return response()->json(['message' => 'TypePet enabled successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function listEnableTypePet()
    {
        try {
            $typePet = PetType::where('low', 1)->get();
            return response()->json(['data' => $typePet], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }

    }

}
