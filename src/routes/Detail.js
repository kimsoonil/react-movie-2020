import React, { useEffect, useRef } from "react";

// class Detail extends React.Component {
//   componentWillMount() {
//     const { location, history } = this.props;
//     console.log(location.state);
//     if (location.state === "undefined") {
//       history.push("/");
//     }
//   }
//   render() {
//     const { location } = this.props;
//     if (location.state) {
//       return <span>{location.state.title}</span>;
//     } else {
//       return null;
//     }
//   }
// }

function Detail(props) {
  console.log(props);
  const title = useRef();
  useEffect(() => {
    const { location, history } = props;
    console.log(location.state);
    if (location.state === undefined) {
      console.log("확인");
      history.replace("/");
    }
  }, [props]);

  return <span></span>;
}
export default Detail;
