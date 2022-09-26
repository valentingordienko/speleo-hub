import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/QRCodeOutline.svg';

export function QRCodeOutline(props: TProps) {
  return (
    <Icon {...props} name="QRCodeOutline">
      <SVG />
    </Icon>
  );
}
