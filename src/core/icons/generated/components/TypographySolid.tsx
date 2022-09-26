import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TypographySolid.svg';

export function TypographySolid(props: TProps) {
  return (
    <Icon {...props} name="TypographySolid">
      <SVG />
    </Icon>
  );
}
