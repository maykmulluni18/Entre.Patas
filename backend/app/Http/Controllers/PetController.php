<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pet;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class PetController extends Controller
{
    //
    public function index()
    {
        try {

            $pets = Pet::with(['petType', 'typeRace'])->orderBy('created_at', 'desc')
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
            // $validatedData = $request->validate([
            //     'name' => 'required|string|max:255',
            //     'age' => 'required|integer',
            //     'sex' => 'required|string',
            //     'color' => 'required|string|max:255',
            //     'imagen' => 'nullable',
            //     'description' => 'nullable',
            //     'date_end' => 'nullable',
            //     'sterilized' => 'required',
            //     'vaccination' => 'required',
            //     'state' => 'required',
            //     'pet_type_id' => 'required',
            //     'type_race_id' => 'required',
            // ]);

            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'age' => 'required|integer',
                'sex' => 'required|string',
                'color' => 'required|string|max:255',
                'imagen' => 'nullable',
                'description' => 'required',
                'date_end' => 'required',
                'peso' => 'required',
                'tamanio' => 'required',
                'sterilized' => 'required',
                'vaccination' => 'required',
                'state' => 'required',
                'pet_type_id' => 'required',
                'type_race_id' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            $validatedData = $validator->validated();

            if ($request->hasFile('imagen')) {
                $imagePath = $request->file('imagen')->store('images', 'public');
                $validatedData['imagen'] = $imagePath;
            }

            $pet = Pet::create($validatedData);

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
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'age' => 'required|integer',
                'sex' => 'required|string',
                'color' => 'required|string|max:255',
                'imagen' => 'nullable',
                'description' => 'nullable',
                'date_end' => 'nullable',
                'peso' => 'required',
                'tamanio' => 'required',
                'sterilized' => 'required',
                'vaccination' => 'required',
                'state' => 'required',
                'pet_type_id' => 'required',
                'type_race_id' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            $validatedData = $validator->validated();

            $pet = Pet::findOrFail($id);

            if ($request->hasFile('imagen')) {
                if ($pet->imagen) {
                    Storage::delete('public/' . $pet->imagen);
                }
                $imagePath = $request->file('imagen')->store('images', 'public');
                $validatedData['imagen'] = $imagePath;
            }

            $pet->update($validatedData);

            // if ($request->hasFile('imagen')) {
            //     if ($pet->imagen) {
            //         Storage::delete('public/' . $pet->imagen);
            //     }
            //     $imagePath = $request->file('imagen')->store('images', 'public');
            //     $validatedData['imagen'] = $imagePath;
            // }

            // $pet->update($validatedData);
            return response()->json(['message' => 'Pet updated successfully', 'pet' => $pet], 201);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    // get

    public function show($id)
    {
        try {
            // $pet = Pet::findOrFail($id);
            $pet = Pet::with(['petType', 'typeRace'])->findOrFail($id);

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
            $typePet = Pet::findOrFail($id);
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
            $typePet = Pet::findOrFail($id);
            $typePet->update(['low' => 1]); // Asume que "low" es el campo de estado
            return response()->json(['message' => 'TypePet enabled successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function listEnablePet()
    {
        try {
            //$typePet = Pet::where('low', 1)->get();
            $pets = Pet::with(['petType', 'typeRace'])->where('low', 1)->where('state', 'No Adoptado')->orderBy('created_at', 'desc')
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


    // Actualizar solo el estado de una mascota
    public function updateState(Request $request, $id)
    {
        try {

            // Buscar la mascota por su ID
            $pet = Pet::findOrFail($id);

            // Actualizar solo el estado
            $pet->state = 'Adoptado'; // Asignar directamente el valor 'Adoptado'
            $pet->save();

            return response()->json(['message' => 'Pet state updated successfully', 'pet' => $pet], 201);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }

    }

    public function countAdoptedAndNotAdopted()
    {
        try {
            // Contar las mascotas adoptadas
            $adoptedCount = Pet::where('state', 'Adoptado')->count();

            // Contar las mascotas no adoptadas
            $notAdoptedCount = Pet::where('state', 'No Adoptado')->count();

            // Devolver la respuesta en formato JSON
            return response()->json([
                'adopted_count' => $adoptedCount,
                'not_adopted_count' => $notAdoptedCount
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

}
