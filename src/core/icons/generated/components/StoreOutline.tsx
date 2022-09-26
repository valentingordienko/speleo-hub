import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StoreOutline.svg';

export function StoreOutline(props: TProps) {
  return (
    <Icon {...props} name="StoreOutline">
      <SVG />
    </Icon>
  );
}
