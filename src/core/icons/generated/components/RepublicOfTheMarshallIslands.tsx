import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RepublicOfTheMarshallIslands.svg';

export function RepublicOfTheMarshallIslands(props: TBaseProps) {
  return (
    <Icon {...props} name="RepublicOfTheMarshallIslands">
      <SVG />
    </Icon>
  );
}
