import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Guyana.svg';

export function Guyana(props: TBaseProps) {
  return (
    <Icon {...props} name="Guyana">
      <SVG />
    </Icon>
  );
}
