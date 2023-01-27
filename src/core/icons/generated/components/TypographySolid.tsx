import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TypographySolid.svg';

export function TypographySolid(props: TBaseProps) {
  return (
    <Icon {...props} name="TypographySolid">
      <SVG />
    </Icon>
  );
}
