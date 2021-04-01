import { HttpClient } from "@angular/common/http";
import { LoadingController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { DatabaseService } from "./database.service";

export class BaseService {
  static isLoading = false;

  constructor(
    public databaseService: DatabaseService,
    public httpClient: HttpClient,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) {}

  public async presentLoader() {
    BaseService.isLoading = true;
    return await this.loadingController
      .create({
        duration: 5000,
        message: "Procesando...",
      })
      .then((a) => {
        a.present().then(() => {
          console.log("presented");
          if (!BaseService.isLoading) {
            a.dismiss().then(() => console.log("abort presenting"));
          }
        });
      });
  }

  public async dismissLoader() {
    BaseService.isLoading = false;
    return await this.loadingController
      .dismiss()
      .then(() => console.log("dismissed"))
      .catch((error) => console.log("error en dismiss loader", error));
  }

  public async showMessageResponse(response) {
    let color = "success";
    switch (response["state"]) {
      case 1:
        color = "success";
        break;
      case 2:
        color = "warning";
        break;
      case 3:
        color = "danger";
        break;
    }

    const toast = await this.toastController.create({
      message: response["message"],
      duration: 3000,
      position: "top",
      color: color,
    });
    toast.present();
  }

  public async showMessageError(message) {  
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: "top",
      color: "danger",
    });
    toast.present();
  }
}
