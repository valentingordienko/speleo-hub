import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AlertSolid.svg';

export function AlertSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AlertSolid">
      <SVG />
    </Icon>
  );
}
