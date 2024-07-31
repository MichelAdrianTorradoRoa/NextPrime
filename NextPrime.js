const cargarPeliculas = async ()=>{
    try{
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/500?api_key=659660db867e718b14bae3d7f6b8679f');
        // Verificamos si la respuesta es exitosa (código de estado HTTP en el rango 200-299)
        if (!respuesta.ok) {
            // Si la respuesta no es exitosa, lanzamos un error con un mensaje descriptivo
            throw new Error('Network response was not ok' +respuesta.statusText);
        }
        // Convertimos la respuesta a formato JSON
        const datos = await respuesta.json();
        // Imprimimos los datos en la consola para ver la información de la película console.log(datos);
        console.log(datos)
    
    } catch (error) {

        console.error('Hubo un problema con la solicitud Fetch;', error);
    }
}
    cargarPeliculas()