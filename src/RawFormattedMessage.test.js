import test from 'ava';

import React from 'react';

import { IntlProvider } from 'react-intl';

import { mount } from 'enzyme';

import RawFormattedMessage from './RawFormattedMessage';

test(t => {
  const messages = {
    hello: 'world',
  };

  const component = (
    <IntlProvider locale="en" messages={messages}>
      <RawFormattedMessage component="div" id="hello" />
    </IntlProvider>
  );

  const wrapper = mount(component);

  t.ok(wrapper);
});
