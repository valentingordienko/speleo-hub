import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DateUpSolid.svg';

export function DateUpSolid(props: TProps) {
  return (
    <Icon {...props} name="DateUpSolid">
      <SVG />
    </Icon>
  );
}
