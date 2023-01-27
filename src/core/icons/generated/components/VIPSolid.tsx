import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VIPSolid.svg';

export function VIPSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="VIPSolid">
      <SVG />
    </Icon>
  );
}
