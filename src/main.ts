import { Plugin } from 'obsidian';
// import { DEFAULT_SETTINGS, TagUISettings, TagUISettingTab } from './settings';
// import { BuiltInSuggest } from 'typings/suggest';
import { patchLinkSuggest } from 'link-suggest';
import { patchQuickSwitcher } from 'quick-switcher';


export default class TagUIPlugin extends Plugin {
	// settings: TagUISettings;

	async onload() {
		// await this.loadSettings();
		// await this.saveSettings();
		// this.addSettingTab(new TagUISettingTab(this));

		patchLinkSuggest(this);
		patchQuickSwitcher(this);
	}

	// async loadSettings() {
	// 	this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	// }

	// async saveSettings() {
	// 	await this.saveData(this.settings);
	// }
}
