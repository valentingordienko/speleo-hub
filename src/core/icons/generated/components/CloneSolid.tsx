import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CloneSolid.svg';

export function CloneSolid(props: TProps) {
  return (
    <Icon {...props} name="CloneSolid">
      <SVG />
    </Icon>
  );
}
