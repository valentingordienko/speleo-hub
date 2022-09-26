import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/WikiSolid.svg';

export function WikiSolid(props: TProps) {
  return (
    <Icon {...props} name="WikiSolid">
      <SVG />
    </Icon>
  );
}
