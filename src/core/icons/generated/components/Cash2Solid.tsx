import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Cash2Solid.svg';

export function Cash2Solid(props: TProps) {
  return (
    <Icon {...props} name="Cash2Solid">
      <SVG />
    </Icon>
  );
}
