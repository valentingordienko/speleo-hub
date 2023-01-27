import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SyncForbidOutline.svg';

export function SyncForbidOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SyncForbidOutline">
      <SVG />
    </Icon>
  );
}
