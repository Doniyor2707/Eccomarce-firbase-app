// components
import CardTitle from "../../../components/ui/cardTitle/CardTitle";
import Card from "../../../components/main/card/Card";
import CardContent from "../../../components/main/card/cardContent/CardContent";

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
        <CardContent/>
        
      </Card>
    </div>
  );
};

export default Home;
