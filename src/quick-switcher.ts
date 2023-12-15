import TagUIPlugin from "main";
import { around } from "monkey-around";
import { SuggestModal } from "obsidian";
import { QuickSwitcherItem } from "typings/suggest";
import { renderTagsInSuggestion } from "utils";

export const patchQuickSwitcher = (plugin: TagUIPlugin) => {
    const app = plugin.app;

    plugin.register(around((app.internalPlugins.getPluginById('switcher').instance.QuickSwitcherModal as new (...args: any[]) => SuggestModal<QuickSwitcherItem>).prototype, {
        renderSuggestion(old) {
            return function (item: QuickSwitcherItem, el: HTMLElement) {
                old.call(this, item, el);
                renderTagsInSuggestion(app, item, el);
            }
        }
    }));
};
