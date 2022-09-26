import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Thailand.svg';

export function Thailand(props: TProps) {
  return (
    <Icon {...props} name="Thailand">
      <SVG />
    </Icon>
  );
}
