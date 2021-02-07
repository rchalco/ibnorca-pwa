import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor(private storage: Storage) {}

  testDB() {
    this.storage.set("persona", { nombre: "ruben", apellido: "chalco" });
    console.log("dato rescatado", this.storage.get("persona"));
  }

  setItem(key, _object) {
    this.storage.set(key, _object);
  }

  getItem(key) {
    return this.storage.get(key);
  }

  removeItem(key) {
    return this.storage.remove(key);
  }
}
