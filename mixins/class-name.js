Cosmos.mixins.ClassName = {
  getClassName: function(defaultClassName) {
    if (this.props.className !== undefined) {
      return this.props.className;
    }
    return defaultClassName;
  }
};
