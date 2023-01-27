import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/KeyboardSolid.svg';

export function KeyboardSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="KeyboardSolid">
      <SVG />
    </Icon>
  );
}
