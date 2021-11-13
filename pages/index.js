import router from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import httpService from "../services/httpService";
export default function Home() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
    } else {
      router.push("/signIn");
    }
  }, []);
  const displayEventHandler = async (e) => {
    e.preventDefault();
    const res = await httpService.getEvents();
    if (res.success === true) {
      console.log(res.data);
      router.push({
        pathname: "/events",
        query: { data: JSON.stringify(res.data) },
      });
      //router.push("/events");
    }
  };
  const displayMangaHandler = async (e) => {
    e.preventDefault();
    const res = await httpService.getMangas();
    if (res.success === true) {
      console.log(res.data);
      router.push({
        pathname: "/events",
        query: { data: JSON.stringify(res.data) },
      });
      //router.push("/events");
    }
  };
  return (
    <div>
      <Header />
      <Menu />
      <div className="bg-main-bg h-[100vh] bg-cover">
        <h1 className="text-center w-full text-[5rem] font-bold text-white">
          Search on AMAX
        </h1>
        <div className="p-10 flex flex-wrap justify-evenly">
          <div className="card" onClick={displayEventHandler}>
            <h1 className="w-full float-left text-xl font-semibold">Events</h1>
            <img src="./event.jpeg" alt="" className="h-[17rem]" />
            <p className="mt-2 text-sm float-left w-full">See more</p>
          </div>
          <div className="card" onClick={displayMangaHandler}>
            <h1 className="w-full float-left text-xl font-semibold">Mangas</h1>
            <img src="./manga.jpg" alt="" className="h-[17rem]" />
            <p className="mt-2 text-sm float-left w-full">See more</p>
          </div>
          <div className="card">
            <h1 className="w-full float-left text-xl font-semibold">
              Equipments
            </h1>
            <img src="./equipments.jpeg" alt="" className="h-[17rem]" />
            <p className="mt-2 text-sm float-left w-full">See more</p>
          </div>
          <div className="card">
            <h1 className="w-full float-left text-xl font-semibold">
              Bank details
            </h1>
            <img src="./bank.jpeg" alt="" className="h-[17rem]" />
            <p className="mt-2 text-sm float-left w-full">See more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
