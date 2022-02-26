/* Logs messages for the mounting and unmounting of the wrappedComponenet */

function withLogging(WrappedComponent) {
  withLogging.displayName = `withLogging(${getDisplayName(WrappedComponent)})`;
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`)
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is going to unmount`)
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  };
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.name || 'Component';
}
