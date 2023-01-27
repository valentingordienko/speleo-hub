import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Laos.svg';

export function Laos(props: TBaseProps) {
  return (
    <Icon {...props} name="Laos">
      <SVG />
    </Icon>
  );
}
