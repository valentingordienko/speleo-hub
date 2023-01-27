import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Jordan.svg';

export function Jordan(props: TBaseProps) {
  return (
    <Icon {...props} name="Jordan">
      <SVG />
    </Icon>
  );
}
