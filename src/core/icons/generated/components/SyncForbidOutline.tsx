import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SyncForbidOutline.svg';

export function SyncForbidOutline(props: TProps) {
  return (
    <Icon {...props} name="SyncForbidOutline">
      <SVG />
    </Icon>
  );
}
