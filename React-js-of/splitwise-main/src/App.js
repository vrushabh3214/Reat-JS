import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home.jsx";
import SplitBill from "./Components/SplitBill/SplitBill.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import AddGroup from "./Components/AddGroup/AddGroup.jsx";
import "./sass/styles.scss";
import Setting from "./Components/Setting/setting.jsx";

const App = () => {
  const [arrayOfGroups, setArrayOfGroups] = useState([]);

  useEffect(() => {
    const isDark = localStorage.getItem("theme");
    if (isDark === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const onUpdateGroupInfo = (nameOfGroup, names) => {
    setArrayOfGroups((prevGroups) => [
      ...prevGroups,
      { nameOfGroup, people: names, bills: [] }
    ]);
  };

  const onUpdateNewInfoBill = (newDebts, nameOfBill, total, paidBy, nameOfCheckedGroup) => {
    const groups = [...arrayOfGroups];
    const checkedGroupIndx = groups.findIndex(
      (group) => group.nameOfGroup === nameOfCheckedGroup
    );

    groups[checkedGroupIndx].bills = [
      ...groups[checkedGroupIndx].bills,
      { name: nameOfBill, total, debts: newDebts, paidBy }
    ];

    setArrayOfGroups(groups);
    localStorage.setItem("arrayOfGroups", JSON.stringify(groups));
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/add"
          render={(props) => (
            <AddGroup {...props} onUpdateGroupInfo={onUpdateGroupInfo} />
          )}
        />
        <Route
          path="/dashboard"
          render={(props) => (
            <Dashboard {...props} arrayOfGroups={arrayOfGroups} />
          )}
        />
        <Route
          path="/split"
          render={(props) => (
            <SplitBill
              {...props}
              arrayOfGroups={arrayOfGroups}
              updateNewInfoBill={onUpdateNewInfoBill}
            />
          )}
        />
        <Route path="/setting" render={() => <Setting />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
