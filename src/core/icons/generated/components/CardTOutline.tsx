import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardTOutline.svg';

export function CardTOutline(props: TProps) {
  return (
    <Icon {...props} name="CardTOutline">
      <SVG />
    </Icon>
  );
}
