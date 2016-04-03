import React from 'react';
import RawFormatterBase from './RawFormatterBase';

const RawFormatterTime = props =>
  <RawFormatterBase formatter="formatHTMLMessage" {...props} />;

export default RawFormatterTime;
