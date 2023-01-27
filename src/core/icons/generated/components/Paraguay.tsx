import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Paraguay.svg';

export function Paraguay(props: TBaseProps) {
  return (
    <Icon {...props} name="Paraguay">
      <SVG />
    </Icon>
  );
}
