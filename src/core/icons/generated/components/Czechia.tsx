import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Czechia.svg';

export function Czechia(props: TBaseProps) {
  return (
    <Icon {...props} name="Czechia">
      <SVG />
    </Icon>
  );
}
