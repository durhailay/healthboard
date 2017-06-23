// @flow
import './style.scss';
import type { UserType } from '../../core/Types';
import User from '../User';
import React from 'react';

const Leaderboard = (({ users }: { users: Array<UserType> }) => (
    <div className="leaderboard">
      {
        users && users.length > 0 ?
          users.map((user: UserType, index: number) =>  <User key={ index } { ...user } />)
        :
          <p>No entries</p>
      }
    </div>
  )
);

export default Leaderboard;
