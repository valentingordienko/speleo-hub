import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Algeria.svg';

export function Algeria(props: TBaseProps) {
  return (
    <Icon {...props} name="Algeria">
      <SVG />
    </Icon>
  );
}
