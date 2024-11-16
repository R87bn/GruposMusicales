interface Grupo {
  nombre: string;
  creado: number;
  activo: boolean;
  genero: string;
}

const grupo1: Grupo = {
  nombre: "The Beattles",
  creado: 1960,
  activo: true,
  genero: "🎵Pop Rock",
};

const grupo2: Grupo = {
  nombre: "Quenn",
  creado: 1970,
  activo: false,
  genero: "🎸Rock",
};

const grupo3: Grupo = {
  nombre: "ACDC",
  creado: 1973,
  activo: true,
  genero: "🤘Hard Rock",
};

const grupo4: Grupo = {
  nombre: "Ludwing van Beethoven",
  creado: 1970,
  activo: false,
  genero: "🎼Música clásica",
};

const grupo5: Grupo = {
  nombre: "The Rolling Stones",
  creado: 1962,
  activo: true,
  genero: "🎸Rock",
};

//busco info para agrupar en un array todos los grupos para optimizar el código
const grupos: Grupo[] = [grupo1, grupo2, grupo3, grupo4, grupo5];

//Iteramos en el array para imprimir los resultados
grupos.forEach((grupo) => {
  console.log(grupo);

  const estiloGrupo = `
  font-weight: bold;
  font-size: 20px;
  background-color: green;
  color: black;
 
`;

  // Iterar sobre el array y mostrar la información con estilos
  grupos.forEach((grupo) => {
    console.log(
      `%c${grupo.nombre}`,
      estiloGrupo,
      ` | Año de fundación: ${grupo.creado} | Activo: ${
        //sin estilos adicionales
        grupo.activo ? "Sí" : "No"
      } | Género: ${grupo.genero}`
    );
  });
});
