import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Tunisia.svg';

export function Tunisia(props: TBaseProps) {
  return (
    <Icon {...props} name="Tunisia">
      <SVG />
    </Icon>
  );
}
