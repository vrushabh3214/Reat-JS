import React, { useState } from 'react';
import '../sass/styles.scss';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import Groups from './Group/Groups.jsx';
import Group from './Group/Group.jsx';

const Dashboard = ({ arrayOfGroups }) => {
  const [clickedGroup, setClickedGroup] = useState('');
  const [clickedIndx, setClickedIndx] = useState(0);
  
  const match = useRouteMatch();
  const url = match.url;

  const onHandleClickedGroup = (group, index) => {
    setClickedGroup(group);
    setClickedIndx(index);
  };

  return (
    <div>
      <Route
        exact
        path={url}
        render={(props) => (
          <Groups
            {...props}
            arrayOfGroups={arrayOfGroups}
            onHandleClickedGroup={onHandleClickedGroup}
          />
        )}
      />
      <Route
        path={`${url}/:${clickedIndx}`}
        render={(props) => (
          <Group
            {...props}
            clickedGroup={clickedGroup}
            clickedIndx={clickedIndx}
          />
        )}
      />
      <div className="footer">
        <Link className="addBillBtn" to="/split">
          Add your bills
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
