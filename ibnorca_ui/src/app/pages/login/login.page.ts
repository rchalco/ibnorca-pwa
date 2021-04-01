import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  user = "";
  password = "";

  constructor(private router: Router, private toastCtrl: ToastController) {}
  ngOnInit() {}

  login(form) {
    if (this.user === "admin" && this.password === "admin") {
      this.router.navigateByUrl("list-ciclos?idAuditor=93");
    }
    else{
      this.presentToast("Usuario o password invalido");
    }
  }

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: "top",
      color: "danger",
    });
    toast.present();
  }
}
