import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Comoros.svg';

export function Comoros(props: TBaseProps) {
  return (
    <Icon {...props} name="Comoros">
      <SVG />
    </Icon>
  );
}
