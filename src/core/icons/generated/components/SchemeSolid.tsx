import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SchemeSolid.svg';

export function SchemeSolid(props: TProps) {
  return (
    <Icon {...props} name="SchemeSolid">
      <SVG />
    </Icon>
  );
}
