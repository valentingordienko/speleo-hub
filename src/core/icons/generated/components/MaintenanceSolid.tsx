import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MaintenanceSolid.svg';

export function MaintenanceSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MaintenanceSolid">
      <SVG />
    </Icon>
  );
}
