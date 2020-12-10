import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedExpoNativescriptReactNativeShim } from '@demo/shared';
import {} from '@nativescript-community/expo-nativescript-react-native-shim';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedExpoNativescriptReactNativeShim {}
