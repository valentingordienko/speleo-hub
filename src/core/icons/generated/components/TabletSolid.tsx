import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TabletSolid.svg';

export function TabletSolid(props: TProps) {
  return (
    <Icon {...props} name="TabletSolid">
      <SVG />
    </Icon>
  );
}
