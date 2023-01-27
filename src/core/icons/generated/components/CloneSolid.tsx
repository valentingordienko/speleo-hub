import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CloneSolid.svg';

export function CloneSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CloneSolid">
      <SVG />
    </Icon>
  );
}
