import { EnvironmentProviders, Provider } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { mainRoutes } from './app/routes';
import {provideHttpClient} from '@angular/common/http'

const providers: EnvironmentProviders | Provider = [
  provideRouter(mainRoutes),
  provideHttpClient(),
];

bootstrapApplication(AppComponent, {
  providers,
});
