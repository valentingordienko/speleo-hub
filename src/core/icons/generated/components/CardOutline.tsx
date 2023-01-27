import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardOutline.svg';

export function CardOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CardOutline">
      <SVG />
    </Icon>
  );
}
