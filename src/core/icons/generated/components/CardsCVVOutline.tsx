import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardsCVVOutline.svg';

export function CardsCVVOutline(props: TProps) {
  return (
    <Icon {...props} name="CardsCVVOutline">
      <SVG />
    </Icon>
  );
}
