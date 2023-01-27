import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DateUpSolid.svg';

export function DateUpSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DateUpSolid">
      <SVG />
    </Icon>
  );
}
