import "./styles.css";
import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <Form />
      <ToDoList todos={[]} />
    </div>
  );
}
export default Home;