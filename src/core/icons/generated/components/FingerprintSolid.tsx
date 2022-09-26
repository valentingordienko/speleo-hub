import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FingerprintSolid.svg';

export function FingerprintSolid(props: TProps) {
  return (
    <Icon {...props} name="FingerprintSolid">
      <SVG />
    </Icon>
  );
}
