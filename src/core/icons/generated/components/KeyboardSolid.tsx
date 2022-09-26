import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/KeyboardSolid.svg';

export function KeyboardSolid(props: TProps) {
  return (
    <Icon {...props} name="KeyboardSolid">
      <SVG />
    </Icon>
  );
}
