import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/QRCodeOutline.svg';

export function QRCodeOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="QRCodeOutline">
      <SVG />
    </Icon>
  );
}
