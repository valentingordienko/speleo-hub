import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SchemeSolid.svg';

export function SchemeSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="SchemeSolid">
      <SVG />
    </Icon>
  );
}
