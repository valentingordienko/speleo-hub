import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/China.svg';

export function China(props: TBaseProps) {
  return (
    <Icon {...props} name="China">
      <SVG />
    </Icon>
  );
}
