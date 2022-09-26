import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Czechia.svg';

export function Czechia(props: TProps) {
  return (
    <Icon {...props} name="Czechia">
      <SVG />
    </Icon>
  );
}
