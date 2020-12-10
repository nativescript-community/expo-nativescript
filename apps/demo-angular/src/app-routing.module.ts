import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'expo-contacts-nativescript-plugin', loadChildren: () => import('./plugin-demos/expo-contacts-nativescript-plugin.module').then((m) => m.ExpoContactsNativescriptPluginModule) },
	{ path: 'expo-nativescript-adapter', loadChildren: () => import('./plugin-demos/expo-nativescript-adapter.module').then((m) => m.ExpoNativescriptAdapterModule) },
	{ path: 'expo-nativescript-react-native-shim', loadChildren: () => import('./plugin-demos/expo-nativescript-react-native-shim.module').then((m) => m.ExpoNativescriptReactNativeShimModule) },
	{ path: 'expo-permissions-nativescript-plugin', loadChildren: () => import('./plugin-demos/expo-permissions-nativescript-plugin.module').then((m) => m.ExpoPermissionsNativescriptPluginModule) },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
