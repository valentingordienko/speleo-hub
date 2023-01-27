import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MultiBonusSolid.svg';

export function MultiBonusSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MultiBonusSolid">
      <SVG />
    </Icon>
  );
}
