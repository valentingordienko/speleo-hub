import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SyncOutline.svg';

export function SyncOutline(props: TProps) {
  return (
    <Icon {...props} name="SyncOutline">
      <SVG />
    </Icon>
  );
}
