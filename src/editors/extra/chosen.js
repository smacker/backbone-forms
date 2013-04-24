/**
 * Chosen editor
 *
 * Renders a <select> with Chosen plugin (http://harvesthq.github.io/chosen/)
 */
Form.editors.Chosen = Form.editors.Select.extend({
  _renderChosen: function() {
    self = this;

    // In pure Backbone we don't have event when el shown in DOM, so we have to check it like this
    if ($.contains(document.body, self.el)) {
      self.$el.chosen();
      return;
    }

    setTimeout(function() { self._renderChosen(); }, 100);
  },

  renderOptions: function(options) {
    Form.editors.Select.prototype.renderOptions.call(this, options);
    this._renderChosen();
  }

  setValue: function(value) {
    Form.editors.Select.prototype.setValue.call(this, value);
    this.$el.trigger("liszt:updated");
  }
});
