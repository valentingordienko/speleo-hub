import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IsleOfMan.svg';

export function IsleOfMan(props: TBaseProps) {
  return (
    <Icon {...props} name="IsleOfMan">
      <SVG />
    </Icon>
  );
}
