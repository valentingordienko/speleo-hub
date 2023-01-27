import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FrenchGuiana.svg';

export function FrenchGuiana(props: TBaseProps) {
  return (
    <Icon {...props} name="FrenchGuiana">
      <SVG />
    </Icon>
  );
}
