import React from "react";

const list = [
  {
    id: 1,
    title: "Fix navigation bug",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas dictum libero, vel tristique odio pulvinar vitae.",
    lane: 1,
  },
  {
    id: 2,
    title: "Release new website",
    body:
      "hasellus eleifend lacus vitae est ultrices placerat. Nunc at risus id risus venenatis laoreet sit amet cursus neque.",
    lane: 2,
  },
  {
    id: 3,
    title: "Change button color",
    body:
      "Suspendisse ac lorem a neque tempus luctus non aliquam sapien. Cras ut lacus bibendum, placerat nibh eu, tempus neque.",
    lane: 3,
  },
  {
    id: 4,
    title: "Deploy server on acceptance environment",
    body:
      "Pellentesque pharetra fermentum sapien, aliquet ultrices ligula mattis porttitor.",
    lane: 3,
  },
  {
    id: 5,
    title: "Change layout for the content page",
    body:
      "Cras tellus ligula, mattis at facilisis eu, ultricies vel elit. Ut aliquam volutpat lacus, a rutrum sem vulputate non.",
    lane: 3,
  },
  {
    id: 6,
    title: "Complete the registration flow",
    body:
      "In vel commodo ipsum. Duis id ipsum semper, condimentum ipsum sit amet, maximus massa.",
    lane: 4,
  },
  {
    id: 7,
    title: "Create new database instance",
    body:
      " Curabitur nec sem lorem. Donec venenatis, arcu vitae malesuada consequat, dolor ante placerat mi, in fermentum diam ipsum id libero.",
    lane: 4,
  },
];

export default function withDataFetching(WrappedComponent) {
  class WithDataFetching extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [],
        loading: true,
        error: "",
      };
    }

    async componentDidMount() {
      try {
        if (list.length > 0) {
          this.setState({
            data: list,
            loading: false,
          });
        }
      } catch (err) {
        this.setState({
          loading: false,
          error: err.message,
        });
      }
    }

    render() {
      const { data, loading, error } = this.state;
      return (
        <WrappedComponent
          key={data}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  }
  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;
  return WithDataFetching;
}
