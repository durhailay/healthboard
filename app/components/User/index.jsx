// @flow
import './style.scss';
import type { UserType, EntryType } from '../../core/Types';
import React from 'react';
import Entry from '../Entry';

const User = ({ name, entries, change, overallScore }: UserType) => (
    <div className="user">
      <div className="user__header">
        <h3 className="user__name">{ name }</h3>
        <h3 className="user__score"><span>{ overallScore.toFixed(2) }</span></h3>
      </div>
      <div className="user__entries">
        <table>
          <tbody>
            <tr>
              <th className="actualAge">🕓</th>
              <th className="heartAge">❤️🕓</th>
              <th className="bmi">😑</th>
              <th className="bodyFat">🍔%</th>
              <th className="heartRate">💗</th>
              <th className="bpHigh">💉⬆️</th>
              <th className="bpLow">💉⬇️</th>
            </tr>
            {
              entries && entries.length > 0 ?
                entries.map((entry:EntryType, index:number) => <Entry key={ index } { ...entry } />)
              :
                <p>No entries</p>
            }
            { change ? <Entry{ ...change } /> : <span></span> }
          </tbody>
        </table>
      </div>
      <div className="user__change">
      </div>
    </div>
  );

export default User;
