import React from "react";
// import { Card } from "react-bootstrap";
// import GoBackButton from "./GoBackButton";
// import WelcomeCard from "./WelcomeCard";
// import HousemateList from "./HousemateList";

const HouseCard = ({ house, housemates, isLoading }) => {
  return (
    // <div>{isLoading ? <p>loading...</p> : <p>Fetched!!</p>}</div>

    <div className="house-card">
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          {" "}
          <h1>You are a {house}</h1>
          <p>Your housemates: </p>
          {housemates.map((housemate) => (
            <h2 key={housemates.indexOf(housemate)}>{housemate.name}</h2>
          ))}
        </div>
      )}
    </div>
  );
};

export default HouseCard;

// export default class HouseCard extends Component {
//   render() {
//     const { houseName, housemates, goBackToSortingCeremony } = this.props;
//     if (!houseName || !housemates) return <WelcomeCard />;

//     return (
//       <div>
//         <GoBackButton onClick={goBackToSortingCeremony} />
//         <Card className="house-card" style={{ width: "70em", margin: "20px auto" }}>
//           <Card.Body>
//             <Card.Title>Congrats, you are a {houseName}!</Card.Title>
//             <Card.Text></Card.Text>
//           </Card.Body>
//         </Card>
//         <HousemateList housemates={housemates} />
//       </div>
//     );
//   }
// }
