import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MaintenanceOutline.svg';

export function MaintenanceOutline(props: TProps) {
  return (
    <Icon {...props} name="MaintenanceOutline">
      <SVG />
    </Icon>
  );
}
