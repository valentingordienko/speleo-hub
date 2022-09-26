import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Guinea.svg';

export function Guinea(props: TProps) {
  return (
    <Icon {...props} name="Guinea">
      <SVG />
    </Icon>
  );
}
