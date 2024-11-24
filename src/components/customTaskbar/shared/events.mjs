class Emitter {
  constructor() {
    this.listeners = {};
  }
  on(eventName, callback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }
  off(eventName, callback) {
    if (this.listeners[eventName]) {
      this.listeners[eventName] = this.listeners[eventName].filter(
        (cb) => cb !== callback
      );
    }
  }
  emit(eventName, data) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach((callback) => callback(data));
    }
  }
}
var ModalEvents = /* @__PURE__ */ ((ModalEvents2) => {
  ModalEvents2["AddModal"] = "add-modal";
  ModalEvents2["RemoveModal"] = "remove-modal";
  ModalEvents2["ModalVisibilityChanged"] = "modal-visibility-changed";
  return ModalEvents2;
})(ModalEvents || {});
const modals = new Emitter();
export {
  Emitter,
  ModalEvents,
  modals
};
