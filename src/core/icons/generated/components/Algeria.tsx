import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Algeria.svg';

export function Algeria(props: TProps) {
  return (
    <Icon {...props} name="Algeria">
      <SVG />
    </Icon>
  );
}
