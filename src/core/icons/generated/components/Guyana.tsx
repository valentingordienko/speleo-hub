import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Guyana.svg';

export function Guyana(props: TProps) {
  return (
    <Icon {...props} name="Guyana">
      <SVG />
    </Icon>
  );
}
