import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MegaphoneSolid.svg';

export function MegaphoneSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MegaphoneSolid">
      <SVG />
    </Icon>
  );
}
