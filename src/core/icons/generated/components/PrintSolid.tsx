import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PrintSolid.svg';

export function PrintSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PrintSolid">
      <SVG />
    </Icon>
  );
}
