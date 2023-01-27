import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/YenSolid.svg';

export function YenSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="YenSolid">
      <SVG />
    </Icon>
  );
}
