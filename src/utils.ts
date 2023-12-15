import { App, TFile, getAllTags } from "obsidian";

export function renderTag(tag: string) {
    if (!tag.startsWith('#')) tag = '#' + tag;
    return createEl('a', {
        text: tag,
        cls: 'tag',
        attr: { href: tag, target: "_blank", rel: "noopener" }
    });
}

export function renderTagsInSuggestion(app: App, item: { file: TFile }, el: HTMLElement) {
    if (!item.file) return;

    const cache = app.metadataCache.getFileCache(item.file)
    if (!cache) return;

    const tags = getAllTags(cache);
    if (!tags) return;

    let noteEl = el.querySelector('.suggestion-note');
    if (!noteEl) {
        noteEl = createDiv({ cls: 'suggestion-note' });
        el.querySelector('.suggestion-content')!.appendChild(noteEl);
    }

    tags.map(renderTag).forEach((tagEl) => {
        noteEl!.appendChild(tagEl);
    });
}
