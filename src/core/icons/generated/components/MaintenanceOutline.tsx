import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MaintenanceOutline.svg';

export function MaintenanceOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MaintenanceOutline">
      <SVG />
    </Icon>
  );
}
