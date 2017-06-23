// @flow
import './style.scss';
import type { EntryType } from '../../core/Types';
import React from 'react';

const Entry = ({ actualAge, heartAge, bmi, bodyFat, heartRate, bpHigh, bpLow }: EntryType) => (
    <tr className="entry">
      <td className={ actualAge > 0 ? 'positive' : actualAge < 0 ? 'negative' : '' }>{ actualAge }</td>
      <td className={ heartAge > 0 ? 'positive' : heartAge < 0 ? 'negative' : '' }>{ heartAge }</td>
      <td className={ bmi > 0 ? 'positive' : bmi < 0 ? 'negative' : '' }>{ bmi.toFixed(2) }</td>
      <td className={ bodyFat > 0 ? 'positive' : bodyFat < 0 ? 'negative' : '' }>{ bodyFat.toFixed(2) }</td>
      <td className={ heartRate > 0 ? 'positive' : heartRate < 0 ? 'negative' : '' }>{ heartRate }</td>
      <td className={ bpHigh > 0 ? 'positive' : bpHigh < 0 ? 'negative' : '' }>{ bpHigh }</td>
      <td className={ bpLow > 0 ? 'positive' : bpLow < 0 ? 'negative' : '' }>{ bpLow }</td>
    </tr>
  );

export default Entry;
