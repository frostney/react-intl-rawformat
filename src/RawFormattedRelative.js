import React from 'react';
import RawFormatterBase from './RawFormatterBase';

const RawFormatterTime = props =>
  <RawFormatterBase formatter="formatRelative" {...props} />;

export default RawFormatterTime;
