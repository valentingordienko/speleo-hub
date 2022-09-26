import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LinkSolid.svg';

export function LinkSolid(props: TProps) {
  return (
    <Icon {...props} name="LinkSolid">
      <SVG />
    </Icon>
  );
}
