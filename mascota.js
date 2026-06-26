const mascota = {
  nombre: "Pelusa",
  tipo: "gato",
  hambre: 50,      // 0 = lleno, 100 = muerto de hambre
  felicidad: 50,   // 0 = triste, 100 = feliz
  energia: 50,     // 0 = agotado, 100 = lleno de energía

  // descripción
  describir() {
    return `${this.nombre} es un ${this.tipo}`
  }
  // En las próximas etapas agregarás métodos AQUÍ dentro.
};

console.log("Mi tamatama se llama:", mascota.nombre, "y es un", mascota["tipo"]);

console.log(mascota.describir());