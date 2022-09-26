import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Namibia.svg';

export function Namibia(props: TProps) {
  return (
    <Icon {...props} name="Namibia">
      <SVG />
    </Icon>
  );
}
