import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MaintenanceSolid.svg';

export function MaintenanceSolid(props: TProps) {
  return (
    <Icon {...props} name="MaintenanceSolid">
      <SVG />
    </Icon>
  );
}
