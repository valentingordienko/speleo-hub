import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LinkSolid.svg';

export function LinkSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="LinkSolid">
      <SVG />
    </Icon>
  );
}
