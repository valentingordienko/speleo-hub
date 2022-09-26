import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardsCVVSolid.svg';

export function CardsCVVSolid(props: TProps) {
  return (
    <Icon {...props} name="CardsCVVSolid">
      <SVG />
    </Icon>
  );
}
