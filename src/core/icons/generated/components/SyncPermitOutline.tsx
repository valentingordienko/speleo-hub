import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SyncPermitOutline.svg';

export function SyncPermitOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SyncPermitOutline">
      <SVG />
    </Icon>
  );
}
