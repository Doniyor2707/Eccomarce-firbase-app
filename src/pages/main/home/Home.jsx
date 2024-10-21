import React from "react";
import CardTitle from "../../../components/ui/cardTitle/CardTitle";
import Card from "../../../components/main/card/Card";

const Home = () => {
  return (
    <div className="container">
      {/* title */}
      <CardTitle
        title={"Recommendations."}
        spanTitle={"Best matching products for you"}
      />

      {/* card */}
      <Card>
        {/* card content */}
      </Card>
    </div>
  );
};

export default Home;
