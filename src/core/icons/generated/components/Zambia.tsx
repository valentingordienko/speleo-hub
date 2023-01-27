import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Zambia.svg';

export function Zambia(props: TBaseProps) {
  return (
    <Icon {...props} name="Zambia">
      <SVG />
    </Icon>
  );
}
