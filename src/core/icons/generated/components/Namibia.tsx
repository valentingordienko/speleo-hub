import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Namibia.svg';

export function Namibia(props: TBaseProps) {
  return (
    <Icon {...props} name="Namibia">
      <SVG />
    </Icon>
  );
}
