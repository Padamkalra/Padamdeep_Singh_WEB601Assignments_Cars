import { Content } from "./content-interface";

export class ContentList {
    private _items: Content [];

    constructor() {
        this._items = [];
    }

    getItems(): Content [] {
        return this._items;
    }
    getLength(){
        return this._items.length;
    }


    addFunction(contentItem: Content) {
        return this._items.push(contentItem);
    }

  
    printIndex(index: number): string {
        let readerFriendlyHtml = `<div>`;
            readerFriendlyHtml += `<p>` + this._items[index].title + `<p>`;
            readerFriendlyHtml += `<p>` + this._items[index].description + `<p>`;
            readerFriendlyHtml += `<p>` + this._items[index].type + `<p>`;
            readerFriendlyHtml += `<p>` + this._items[index].creator + `<p>`;
            readerFriendlyHtml += `<img src ="` + this._items[index].imgURL + `">`;
            readerFriendlyHtml += `</div>`;
            return readerFriendlyHtml;
    }
}