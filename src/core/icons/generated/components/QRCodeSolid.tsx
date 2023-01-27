import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/QRCodeSolid.svg';

export function QRCodeSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="QRCodeSolid">
      <SVG />
    </Icon>
  );
}
