import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/KeySolid.svg';

export function KeySolid(props: TProps) {
  return (
    <Icon {...props} name="KeySolid">
      <SVG />
    </Icon>
  );
}
