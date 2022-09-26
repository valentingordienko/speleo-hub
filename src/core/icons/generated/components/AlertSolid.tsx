import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AlertSolid.svg';

export function AlertSolid(props: TProps) {
  return (
    <Icon {...props} name="AlertSolid">
      <SVG />
    </Icon>
  );
}
