import { Grid, Container} from "@mui/material";
import TenancyCard from "./TenancyCard";

export interface CardDataI {
  title: string;
  description: string;
  image: string;
}

const carddata: CardDataI[] = [
  {
    title: "Tenancy",
    description:"Explore your existing tenancy contracts and occupancy statuses",
    image:"images/chart.png",
  },
  {
    title: "Revenue Expenditure",
    description:"Get an overview of how much you are spending",
    image:"images/revexpend.png",
  },
  {
    title: "Bank Accounts",
    description:"See Bank accounts of your tenants",
    image:"images/bank.png",
  },
  {
    title: "Utility Cost Calculation",
    description:"See utililiy cost statistics",
    image:"images/cost.png",
  },
  {
    title: "Meter Reading",
    description:"Get an overview electricity consumption",
    image:"images/cost.png",
  },
  {
    title: "Utility Contracts",
    description:"See your contracts",
    image:"images/contracts.png",
  }
];

function TenancyGrid() {
  return (
    
    <Container maxWidth="md">
        <Grid container spacing={2}>
        {carddata?.map((card:CardDataI) => {
            return(
              <TenancyCard card={card}/>
            )
          })}
        </Grid>
      
        </Container>
  );
}

export default TenancyGrid;
