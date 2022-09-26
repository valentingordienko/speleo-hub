import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Antarctica.svg';

export function Antarctica(props: TProps) {
  return (
    <Icon {...props} name="Antarctica">
      <SVG />
    </Icon>
  );
}
