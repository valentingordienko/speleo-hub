import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UnsignOutline.svg';

export function UnsignOutline(props: TProps) {
  return (
    <Icon {...props} name="UnsignOutline">
      <SVG />
    </Icon>
  );
}
