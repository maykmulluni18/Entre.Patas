<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TypeRace; // Asegúrate de importar el modelo correspondiente

class TypeRaceController extends Controller
{
    // Obtener todos los registros
    //
    public function index()
    {
        try {
            $TypeRace = TypeRace::all();
            return response()->json(['data' => $TypeRace], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Crear un nuevo registro
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required',
            // 'low' //estado
            // Agrega más reglas de validación según sea necesario
        ]);

        try {
            $typePet = TypeRace::create($request->all());
            return response()->json(['message' => 'Created successfully', 'tipo de mascota' => $typePet], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Actualizar un registro existente
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            //'low' //estado
            // Agrega más reglas de validación según sea necesario
        ]);

        try {

            $typePet = TypeRace::findOrFail($id);
            $typePet->update($request->all());
            return response()->json(['message' => 'Updated successfully', 'tipo de mascota' => $typePet], 201);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    // get

    public function show($id)
    {
        try {
            $typePet = TypeRace::findOrFail($id);
            return response()->json(['data' => $typePet], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    // Deshabilitar un registro
    public function disable($id)
    {
        try {
            $typePet = TypeRace::findOrFail($id);
            $typePet->update(['low' => 0]); // Asume que "low" es el campo de estado
            return response()->json(['message' => 'Disabled successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Habilitar un registro previamente deshabilitado
    public function enable($id)
    {
        try {
            $typePet = TypeRace::findOrFail($id);
            $typePet->update(['low' => 1]); // Asume que "low" es el campo de estado
            return response()->json(['message' => 'Enabled successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function listEnableTypeRace()
    {
        try {
            $typeRace = TypeRace::where('low', 1)->get();
            return response()->json(['data' => $typeRace], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
