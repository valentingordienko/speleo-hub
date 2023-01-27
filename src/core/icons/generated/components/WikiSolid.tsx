import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/WikiSolid.svg';

export function WikiSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="WikiSolid">
      <SVG />
    </Icon>
  );
}
