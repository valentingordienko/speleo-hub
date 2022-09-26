import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PhoneOutline.svg';

export function PhoneOutline(props: TProps) {
  return (
    <Icon {...props} name="PhoneOutline">
      <SVG />
    </Icon>
  );
}
