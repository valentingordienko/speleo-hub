import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardsCVVSolid.svg';

export function CardsCVVSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CardsCVVSolid">
      <SVG />
    </Icon>
  );
}
