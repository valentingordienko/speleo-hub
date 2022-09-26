import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Laos.svg';

export function Laos(props: TProps) {
  return (
    <Icon {...props} name="Laos">
      <SVG />
    </Icon>
  );
}
