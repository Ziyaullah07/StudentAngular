import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(),  // ✅ Provide HttpClient globally
//     ...appConfig.providers // Include other providers if you have any
//   ]
// }).catch((err) => console.error(err));