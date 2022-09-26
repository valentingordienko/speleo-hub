import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SyncPermitOutline.svg';

export function SyncPermitOutline(props: TProps) {
  return (
    <Icon {...props} name="SyncPermitOutline">
      <SVG />
    </Icon>
  );
}
