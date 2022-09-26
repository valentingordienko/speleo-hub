import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CheckOutline.svg';

export function CheckOutline(props: TProps) {
  return (
    <Icon {...props} name="CheckOutline">
      <SVG />
    </Icon>
  );
}
