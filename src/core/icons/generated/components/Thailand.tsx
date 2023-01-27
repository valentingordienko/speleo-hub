import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Thailand.svg';

export function Thailand(props: TBaseProps) {
  return (
    <Icon {...props} name="Thailand">
      <SVG />
    </Icon>
  );
}
