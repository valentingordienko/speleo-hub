import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StoreOutline.svg';

export function StoreOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="StoreOutline">
      <SVG />
    </Icon>
  );
}
