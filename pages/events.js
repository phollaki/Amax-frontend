import Header from "../components/Header";
import Menu from "../components/Menu";
import { withRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
function events({ router }) {
  if (router) {
    const events = JSON?.parse(router?.query?.data);
  }
  return (
    <div>
      <Header />
      <Menu />
      <div className="flex p-5">
        <div className="flex-shrink-0 h-screen w-[25%]">
          <Sidebar />
        </div>
        <div className="flex-shrink-0-0 w-full">
          {events.map((event) => (
            <Card
              key={event?.type}
              title={event?.type}
              img={`./events/${event?.type?.toLowerCase().replace(" ", "")}.jpg`}
              mangaName={event?.name}
              unit={event?.unit}
              description={event?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withRouter(events);
