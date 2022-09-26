import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SyncSolid.svg';

export function SyncSolid(props: TProps) {
  return (
    <Icon {...props} name="SyncSolid">
      <SVG />
    </Icon>
  );
}
