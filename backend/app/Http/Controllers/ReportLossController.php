<?php

namespace App\Http\Controllers;

use App\Models\ReportLoss;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ReportLossController extends Controller
{
    //
    public function index()
    {
        try {

            $pets = ReportLoss::orderBy('created_at', 'desc')
                ->get();
            // $pets = Pet::all();
            //  return response()->json($pets, 200);
            // Construir la URL completa de la imagen
            // Construir la URL completa de la imagen para cada mascota
            foreach ($pets as $pet) {
                $pet->imagen_url = asset('storage/' . $pet->imagen);
            }

            return response()->json(['data' => $pets], 200);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    // Crear un nuevo registro
    public function create(Request $request)
    {
        try {

            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'age' => 'required|integer',
                'sex' => 'required|string',
                'color' => 'required|string|max:255',
                'imagen' => 'nullable',
                'description' => 'required',
                'telefono' => 'required',

            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            $validatedData = $validator->validated();

            if ($request->hasFile('imagen')) {
                $imagePath = $request->file('imagen')->store('images', 'public');
                $validatedData['imagen'] = $imagePath;
            }

            $validatedData['state'] = 'Perdido'; // Asignación fija de estado
            $validatedData['date_end'] = now();

            $pet = ReportLoss::create($validatedData);
            // if ($request->hasFile('imagen')) {
            //     $imagePath = $request->file('imagen')->store('images', 'public');
            //     $validatedData['imagen'] = $imagePath;
            // }
            // $pet = Pet::create($validatedData);
            return response()->json(['message' => 'Pet created successfully', 'pet' => $pet], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    // Actualizar un registro existente
    public function update(Request $request, $id)
    {
        try {

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    // get

    public function show($id)
    {
        try {
            // $pet = Pet::findOrFail($id);
            $pet = ReportLoss::findOrFail($id);

            // Construir la URL completa de la imagen
            $imageUrl = asset('storage/' . $pet->imagen); // Suponiendo que 'imagen' es el nombre del campo en la base de datos donde se guarda la ruta de la imagen

            // Agregar la URL de la imagen al objeto $pet
            $pet->imagen_url = $imageUrl;

            return response()->json(['data' => $pet], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    // Deshabilitar un registro
    public function disable($id)
    {
        try {
            $type = ReportLoss::findOrFail($id);
            $type->update(['low' => 0]); // Asume que "low" es el campo de estado
            return response()->json(['message' => 'TypePet disabled successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Habilitar un registro previamente deshabilitado
    public function enable($id)
    {
        try {
            $type = ReportLoss::findOrFail($id);
            $type->update(['low' => 1]); // Asume que "low" es el campo de estado
            return response()->json(['message' => 'TypePet enabled successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function listEnable()
    {
        try {
            //$typePet = Pet::where('low', 1)->get();
            $report = ReportLoss::where('low', 1)->where('state', 'Perdido')->orderBy('created_at', 'desc')
                ->get();
            // $pets = Pet::all();
            //  return response()->json($pets, 200);
            // Construir la URL completa de la imagen
            // Construir la URL completa de la imagen para cada mascota
            foreach ($report as $pet) {
                $pet->imagen_url = asset('storage/' . $pet->imagen);
            }

            return response()->json(['data' => $report], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    // Actualizar solo el estado de una mascota
    public function updateState(Request $request, $id)
    {
        try {

            // Buscar la mascota por su ID
            $report = ReportLoss::findOrFail($id);

            // Actualizar solo el estado
            $report->state = 'No Perdido'; // Asignar directamente el valor 'Adoptado'
            $report->save();

            return response()->json(['message' => 'Report loss state updated successfully', 'report' => $report], 201);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }

    }
}
