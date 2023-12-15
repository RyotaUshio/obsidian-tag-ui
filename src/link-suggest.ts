import TagUIPlugin from "main";
import { around } from "monkey-around";
import { BuiltInSuggestItem } from "typings/suggest";
import { renderTagsInSuggestion } from "utils";

export const patchLinkSuggest = (plugin: TagUIPlugin) => {
    const app = plugin.app;

    plugin.register(around(app.workspace.editorSuggest.suggests[0].constructor.prototype, {
        renderSuggestion(old) {
            return function (item: BuiltInSuggestItem, el: HTMLElement) {
                old.call(this, item, el);
                if (!item.file) return;
                renderTagsInSuggestion(app, item, el);
            }
        }
    }));
};
