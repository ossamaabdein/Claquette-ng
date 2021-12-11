import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const loadingScreen = document.querySelector(".loading-screen");
const body = document.querySelector("body");

platformBrowserDynamic().bootstrapModule(AppModule)
// .then(() => loadingScreen?.classList.add("loaded"))
// .then(() => setTimeout(() => 
// loadingScreen?.remove(), 2000), body?.style.overflow("auto") 
// )
.catch(err => console.error(err));
