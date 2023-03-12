export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      const newItem = this._renderer(item);
      this.addItem(newItem);
    });
  }

  addItem(element) {
    this._containerSelector.prepend(element);
  }
}
