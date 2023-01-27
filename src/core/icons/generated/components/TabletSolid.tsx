import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TabletSolid.svg';

export function TabletSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="TabletSolid">
      <SVG />
    </Icon>
  );
}
