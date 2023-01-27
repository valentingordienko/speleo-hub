import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PhoneOutline.svg';

export function PhoneOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PhoneOutline">
      <SVG />
    </Icon>
  );
}
