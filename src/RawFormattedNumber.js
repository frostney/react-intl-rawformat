import React from 'react';
import RawFormatterBase from './RawFormatterBase';

const RawFormatterTime = props =>
  <RawFormatterBase formatter="formatNumber" {...props} />;

export default RawFormatterTime;
