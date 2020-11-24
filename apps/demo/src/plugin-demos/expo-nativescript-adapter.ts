import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedExpoNativescriptAdapter } from '@demo/shared';
import {} from '@nativescript-community/expo-nativescript-adapter';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedExpoNativescriptAdapter {}
