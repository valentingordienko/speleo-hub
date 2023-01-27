import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TelegrammSolid.svg';

export function TelegrammSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="TelegrammSolid">
      <SVG />
    </Icon>
  );
}
