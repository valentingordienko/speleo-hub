import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardOutline.svg';

export function CardOutline(props: TProps) {
  return (
    <Icon {...props} name="CardOutline">
      <SVG />
    </Icon>
  );
}
