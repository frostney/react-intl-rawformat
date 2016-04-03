import React from 'react';
import RawFormatterBase from './RawFormatterBase';

const RawFormatterTime = props =>
  <RawFormatterBase formatter="formatDate" {...props} />;

export default RawFormatterTime;
