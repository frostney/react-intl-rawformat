import React from 'react';
import RawFormatterBase from './RawFormatterBase';

const RawFormatterTime = props =>
  <RawFormatterBase formatter="formatMessage" {...props} />;

export default RawFormatterTime;
