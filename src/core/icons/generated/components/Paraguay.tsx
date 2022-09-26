import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Paraguay.svg';

export function Paraguay(props: TProps) {
  return (
    <Icon {...props} name="Paraguay">
      <SVG />
    </Icon>
  );
}
