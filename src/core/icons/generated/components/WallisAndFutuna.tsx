import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/WallisAndFutuna.svg';

export function WallisAndFutuna(props: TProps) {
  return (
    <Icon {...props} name="WallisAndFutuna">
      <SVG />
    </Icon>
  );
}
