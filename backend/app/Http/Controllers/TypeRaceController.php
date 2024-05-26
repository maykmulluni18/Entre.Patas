<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TypeRace; // Asegúrate de importar el modelo correspondiente

class TypeRaceController extends Controller
{
    // Obtener todos los registros
    public function index()
    {
        try {
            $typeRaces = TypeRace::all();
            return response()->json(['data' => $typeRaces], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Crear un nuevo registro
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required',
            // Agrega más reglas de validación según sea necesario
        ]);
        try {
            // Aquí puedes validar y guardar los datos del request
            $typeRace = TypeRace::create($request->all());

            return response()->json(['message' => 'Tipo de raza creado con exito', 'tipo_raza' => $typeRace], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Actualizar un registro existente
    public function update(Request $request, $id)
    {
        try {
            // Encuentra el TypeRace por su ID
            $typeRace = TypeRace::findOrFail($id);
            // Lógica para actualizar el registro con los datos del request
            $typeRace->update($request->all());

            return response()->json(['message' => 'TypeRace updated successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Deshabilitar un registro
    public function disable($id)
    {
        try {
            // Encuentra el TypeRace por su ID
            $typeRace = TypeRace::findOrFail($id);
            // Lógica para deshabilitar el registro (cambiar un estado por ejemplo)
            $typeRace->disable();
            
            return response()->json(['message' => 'TypeRace disabled successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Habilitar un registro previamente deshabilitado
    public function enable($id)
    {
        try {
            // Encuentra el TypeRace por su ID
            $typeRace = TypeRace::findOrFail($id);
            // Lógica para habilitar el registro (cambiar un estado por ejemplo)
            $typeRace->enable();
            
            return response()->json(['message' => 'TypeRace enabled successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
