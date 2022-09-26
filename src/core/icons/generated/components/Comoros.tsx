import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Comoros.svg';

export function Comoros(props: TProps) {
  return (
    <Icon {...props} name="Comoros">
      <SVG />
    </Icon>
  );
}
