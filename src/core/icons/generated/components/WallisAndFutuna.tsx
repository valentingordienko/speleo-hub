import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/WallisAndFutuna.svg';

export function WallisAndFutuna(props: TBaseProps) {
  return (
    <Icon {...props} name="WallisAndFutuna">
      <SVG />
    </Icon>
  );
}
