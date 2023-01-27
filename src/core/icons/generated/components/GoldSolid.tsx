import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GoldSolid.svg';

export function GoldSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="GoldSolid">
      <SVG />
    </Icon>
  );
}
