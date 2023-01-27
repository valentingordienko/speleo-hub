import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Israel.svg';

export function Israel(props: TBaseProps) {
  return (
    <Icon {...props} name="Israel">
      <SVG />
    </Icon>
  );
}
