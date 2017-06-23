// @flow
import './style.scss';
import type { UserType, EntryType } from '../../core/Types';
import React from 'react';
import Hero from '../Hero';
import Leaderboard from '../Leaderboard';

import dataFromDB from '../../data/db';

class App extends React.Component {
  state: { users:Array<UserType> } = {
    users: []
  }
  componentDidMount() {
    // TODO: fetch data from firebase
    // TODO: make data immutable

    const users:Array<UserType> = [];
    let tempUser:UserType;

    for (let user:string in dataFromDB.users) {
      const entries:Object = dataFromDB.users[user];
      const tempEntries:Array<EntryType> = [];
      for (let entry:string in entries) {
        tempEntries.push(entries[entry]);
      }
      const entriesLastIndex:number = tempEntries.length - 1;
      const change:EntryType = {
        actualAge: tempEntries[0].actualAge - tempEntries[entriesLastIndex].actualAge,
        heartAge: tempEntries[0].heartAge - tempEntries[entriesLastIndex].heartAge,
        bmi: tempEntries[0].bmi - tempEntries[entriesLastIndex].bmi,
        bodyFat: tempEntries[0].bodyFat - tempEntries[entriesLastIndex].bodyFat,
        heartRate: tempEntries[0].heartRate - tempEntries[entriesLastIndex].heartRate,
        bpHigh: tempEntries[0].bpHigh - tempEntries[entriesLastIndex].bpHigh,
        bpLow: tempEntries[0].bpLow - tempEntries[entriesLastIndex].bpLow
      };
      const vals:Array<number> = ((Object.values(change): any): Array<number>);
      const overallScore:number = vals.reduce((prev:number, next:number): number => (prev + next), 0) / vals.length;

      tempUser = {
        name: user,
        entries: tempEntries,
        change,
        overallScore
      }
      users.push(tempUser);
    }
    users.sort((a, b) => b.overallScore - a.overallScore);
    this.setState({ ...this.state, users: users });
  }
  render() {
    return (
      <div>
        <Hero />
        <Leaderboard users={ this.state.users } />
      </div>
    );
  }
}

export default App;
