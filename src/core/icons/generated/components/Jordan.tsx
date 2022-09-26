import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Jordan.svg';

export function Jordan(props: TProps) {
  return (
    <Icon {...props} name="Jordan">
      <SVG />
    </Icon>
  );
}
