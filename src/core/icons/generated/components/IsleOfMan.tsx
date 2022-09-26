import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IsleOfMan.svg';

export function IsleOfMan(props: TProps) {
  return (
    <Icon {...props} name="IsleOfMan">
      <SVG />
    </Icon>
  );
}
