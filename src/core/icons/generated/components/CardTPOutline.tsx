import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardTPOutline.svg';

export function CardTPOutline(props: TProps) {
  return (
    <Icon {...props} name="CardTPOutline">
      <SVG />
    </Icon>
  );
}
