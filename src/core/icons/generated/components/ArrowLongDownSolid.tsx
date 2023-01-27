import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongDownSolid.svg';

export function ArrowLongDownSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowLongDownSolid">
      <SVG />
    </Icon>
  );
}
