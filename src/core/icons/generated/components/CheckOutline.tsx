import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CheckOutline.svg';

export function CheckOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CheckOutline">
      <SVG />
    </Icon>
  );
}
