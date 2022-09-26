import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Israel.svg';

export function Israel(props: TProps) {
  return (
    <Icon {...props} name="Israel">
      <SVG />
    </Icon>
  );
}
