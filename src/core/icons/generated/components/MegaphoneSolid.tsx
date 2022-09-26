import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MegaphoneSolid.svg';

export function MegaphoneSolid(props: TProps) {
  return (
    <Icon {...props} name="MegaphoneSolid">
      <SVG />
    </Icon>
  );
}
