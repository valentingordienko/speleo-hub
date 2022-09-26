import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SendSignSolid.svg';

export function SendSignSolid(props: TProps) {
  return (
    <Icon {...props} name="SendSignSolid">
      <SVG />
    </Icon>
  );
}
