import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Antarctica.svg';

export function Antarctica(props: TBaseProps) {
  return (
    <Icon {...props} name="Antarctica">
      <SVG />
    </Icon>
  );
}
