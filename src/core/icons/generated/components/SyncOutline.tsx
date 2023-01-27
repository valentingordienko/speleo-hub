import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SyncOutline.svg';

export function SyncOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SyncOutline">
      <SVG />
    </Icon>
  );
}
