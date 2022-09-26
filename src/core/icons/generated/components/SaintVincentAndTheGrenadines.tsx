import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaintVincentAndTheGrenadines.svg';

export function SaintVincentAndTheGrenadines(props: TProps) {
  return (
    <Icon {...props} name="SaintVincentAndTheGrenadines">
      <SVG />
    </Icon>
  );
}
