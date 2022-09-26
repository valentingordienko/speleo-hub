import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/QRCodeSolid.svg';

export function QRCodeSolid(props: TProps) {
  return (
    <Icon {...props} name="QRCodeSolid">
      <SVG />
    </Icon>
  );
}
