import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SyncSolid.svg';

export function SyncSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="SyncSolid">
      <SVG />
    </Icon>
  );
}
