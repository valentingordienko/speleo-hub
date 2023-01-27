import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardTPOutline.svg';

export function CardTPOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CardTPOutline">
      <SVG />
    </Icon>
  );
}
