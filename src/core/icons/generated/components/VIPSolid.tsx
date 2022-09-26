import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VIPSolid.svg';

export function VIPSolid(props: TProps) {
  return (
    <Icon {...props} name="VIPSolid">
      <SVG />
    </Icon>
  );
}
