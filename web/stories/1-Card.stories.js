import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Card from '../src/components/card';

export default {
  title: 'Card',
  component: Card,
};

export const Base = () => (
  <Card title="hello world" resourceType="foo" description="SOMETHING AMAZING IS HAPPENING" />
);
