import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MenuSolid.svg';

export function MenuSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MenuSolid">
      <SVG />
    </Icon>
  );
}
