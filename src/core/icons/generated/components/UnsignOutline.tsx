import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UnsignOutline.svg';

export function UnsignOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="UnsignOutline">
      <SVG />
    </Icon>
  );
}
