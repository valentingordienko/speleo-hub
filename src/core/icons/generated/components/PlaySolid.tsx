import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlaySolid.svg';

export function PlaySolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PlaySolid">
      <SVG />
    </Icon>
  );
}
