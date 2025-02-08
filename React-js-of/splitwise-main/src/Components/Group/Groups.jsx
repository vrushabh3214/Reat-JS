import React from 'react';
import '../../sass/styles.scss';
import GroupList from './GroupList.jsx';
import { Link } from 'react-router-dom';

const Groups = ({ arrayOfGroups, onHandleClickedGroup }) => {
  const handleClickedGroup = (clickedGroup, clickedIndx) => {
    onHandleClickedGroup(clickedGroup, clickedIndx);
  };

  return (
    <div>
      <div className="menu">
        <h1>All groups</h1>
        <Link className="exitBtn" to="/">
          Home
        </Link>
        <Link className="addGroupBtn" to="/setting">
          Setting
        </Link>
      </div>
      <GroupList
        arrayOfGroups={arrayOfGroups}
        onHandleClickedGroup={handleClickedGroup}
      />
    </div>
  );
};

export default Groups;
