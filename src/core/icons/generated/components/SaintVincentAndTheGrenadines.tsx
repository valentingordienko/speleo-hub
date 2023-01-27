import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaintVincentAndTheGrenadines.svg';

export function SaintVincentAndTheGrenadines(props: TBaseProps) {
  return (
    <Icon {...props} name="SaintVincentAndTheGrenadines">
      <SVG />
    </Icon>
  );
}
