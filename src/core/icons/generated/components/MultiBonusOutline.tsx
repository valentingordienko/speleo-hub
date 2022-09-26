import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MultiBonusOutline.svg';

export function MultiBonusOutline(props: TProps) {
  return (
    <Icon {...props} name="MultiBonusOutline">
      <SVG />
    </Icon>
  );
}
