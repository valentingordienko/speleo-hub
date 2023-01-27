import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/KeySolid.svg';

export function KeySolid(props: TBaseProps) {
  return (
    <Icon {...props} name="KeySolid">
      <SVG />
    </Icon>
  );
}
