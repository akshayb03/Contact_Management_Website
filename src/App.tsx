import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Charts } from "./pages/Charts";
import { Contacts } from "./pages/Contacts";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import { NewContact } from "./pages/NewContact";
import { Provider } from "react-redux";
import store from "./store";
import { EditContact } from "./pages/EditContact";
import { Maps } from "./pages/Maps";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="flex flex-col h-dvh">
          <NavBar />
          <div className="flex flex-col lg:flex-row flex-1">
            <SideBar />
            <div className="flex flex-1 justify-center bg-neutral-200">
              <Routes>
                <Route path="/" Component={Contacts} />
                <Route path="/contacts" Component={Contacts} />
                <Route path="/charts" Component={Charts} />
                <Route path="/maps" Component={Maps} />
                <Route path="/new-contact" Component={NewContact} />
                <Route path="/edit-contact" Component={EditContact} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
