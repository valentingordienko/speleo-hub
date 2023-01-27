import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FingerprintSolid.svg';

export function FingerprintSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FingerprintSolid">
      <SVG />
    </Icon>
  );
}
