import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongDownSolid.svg';

export function ArrowLongDownSolid(props: TProps) {
  return (
    <Icon {...props} name="ArrowLongDownSolid">
      <SVG />
    </Icon>
  );
}
