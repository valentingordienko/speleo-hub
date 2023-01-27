import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MultiBonusOutline.svg';

export function MultiBonusOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MultiBonusOutline">
      <SVG />
    </Icon>
  );
}
