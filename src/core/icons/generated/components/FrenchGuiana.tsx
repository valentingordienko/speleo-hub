import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FrenchGuiana.svg';

export function FrenchGuiana(props: TProps) {
  return (
    <Icon {...props} name="FrenchGuiana">
      <SVG />
    </Icon>
  );
}
