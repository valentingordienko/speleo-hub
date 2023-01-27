import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PensionSolid.svg';

export function PensionSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PensionSolid">
      <SVG />
    </Icon>
  );
}
