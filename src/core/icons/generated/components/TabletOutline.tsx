import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TabletOutline.svg';

export function TabletOutline(props: TProps) {
  return (
    <Icon {...props} name="TabletOutline">
      <SVG />
    </Icon>
  );
}
