import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*");

	if (error) {
		console.error(error);
		throw new Error("Cabins could not load..");
	}

	return data;
}

export async function createEditCabin(newCabin, id) {
	// handling the image

	const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

	const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
		"/",
		""
	);

	const imagePath = hasImagePath
		? newCabin.image
		: `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

	let query = supabase.from("cabins");

	// Create
	if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

	// Edit
	if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

	const { data, error } = await query.select().single();

	if (error) {
		console.error(error);
		throw new Error("Cabins could not be created");
	}

	// Upload an image

	if (hasImagePath) return data;

	const { error: storageError } = await supabase.storage
		.from("cabin-images")
		.upload(imageName, newCabin.image);

	// delete the cabin if sorage error
	if (storageError) {
		await supabase.from("cabins").delete().eq("id", data.id);

		console.error(error);
		throw new Error("Cabin image could not be created");
	}

	return data;
}

export async function deleteCabin(id) {
	const { data, error } = await supabase.from("cabins").delete().eq("id", id);

	if (error) {
		console.error(error);
		throw new Error("Cabins could not be deleted");
	}

	return data;
}
