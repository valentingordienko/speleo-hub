import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TelegrammSolid.svg';

export function TelegrammSolid(props: TProps) {
  return (
    <Icon {...props} name="TelegrammSolid">
      <SVG />
    </Icon>
  );
}
