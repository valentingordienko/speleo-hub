import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/China.svg';

export function China(props: TProps) {
  return (
    <Icon {...props} name="China">
      <SVG />
    </Icon>
  );
}
