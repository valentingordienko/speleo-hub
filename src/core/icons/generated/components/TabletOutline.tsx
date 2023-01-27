import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TabletOutline.svg';

export function TabletOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TabletOutline">
      <SVG />
    </Icon>
  );
}
