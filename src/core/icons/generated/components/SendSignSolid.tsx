import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SendSignSolid.svg';

export function SendSignSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="SendSignSolid">
      <SVG />
    </Icon>
  );
}
