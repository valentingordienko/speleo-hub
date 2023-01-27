import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardTOutline.svg';

export function CardTOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CardTOutline">
      <SVG />
    </Icon>
  );
}
