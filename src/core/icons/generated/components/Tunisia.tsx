import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Tunisia.svg';

export function Tunisia(props: TProps) {
  return (
    <Icon {...props} name="Tunisia">
      <SVG />
    </Icon>
  );
}
