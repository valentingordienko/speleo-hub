import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Zambia.svg';

export function Zambia(props: TProps) {
  return (
    <Icon {...props} name="Zambia">
      <SVG />
    </Icon>
  );
}
