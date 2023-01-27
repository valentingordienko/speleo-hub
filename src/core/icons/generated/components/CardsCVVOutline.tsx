import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardsCVVOutline.svg';

export function CardsCVVOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CardsCVVOutline">
      <SVG />
    </Icon>
  );
}
