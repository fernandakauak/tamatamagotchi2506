const mascota = {
  nombre: "Pelusa",
  tipo: "gato",
  hambre: 50,      // 0 = lleno, 100 = muerto de hambre
  felicidad: 50,   // 0 = triste, 100 = feliz
  energia: 50,     // 0 = agotado, 100 = lleno de energía

  // descripción
  describir() {
    return `${this.nombre} es un ${this.tipo}`
  },

  // alimentar
  alimentar() {
    return this.hambre = Math.max(0, this.hambre - 20);
  },

  // jugar
  jugar() {
    return this.felicidad = Math.min(100, this.felicidad + 20);
    return this.energia  = Math.max(0, this.energia - 15);
  },

  // dormir
  dormir() {
    return this.energia = Math.min(100, this.energia + 30);
  },

  // En las próximas etapas agregarás métodos AQUÍ dentro.
};

console.log("Mi tamatama se llama:", mascota.nombre, "y es un", mascota["tipo"]);

console.log(mascota.describir());

console.log("Pelusa comió, ahora tiene de hambre:", mascota.alimentar());
console.log("Pelusa comió, ahora tiene de hambre:", mascota.alimentar());

console.log("Pelusa jugó 🎾 Felicidad:", mascota.jugar(this.felicidad), "Energía:", mascota.jugar(this.energia));

console.log("Pelusa durmió 😴 — Energía:", mascota.dormir(this.energia));