import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MultiBonusSolid.svg';

export function MultiBonusSolid(props: TProps) {
  return (
    <Icon {...props} name="MultiBonusSolid">
      <SVG />
    </Icon>
  );
}
