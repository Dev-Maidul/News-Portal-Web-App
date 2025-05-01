import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import MarqueText from "../Components/MarqueText";
import Navbar from "../Components/Navbar";
import LeftAside from "../Pages/Home/LeftAside";
import RightAside from "../Pages/Home/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section>
          <MarqueText></MarqueText>
        </section>
        <section>
            <Navbar></Navbar>
        </section>
      </header>

      <main className="grid grid-cols-12 gap-4  w-10/12 mx-auto ">
        <aside className="col-span-3">
            <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
            <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
