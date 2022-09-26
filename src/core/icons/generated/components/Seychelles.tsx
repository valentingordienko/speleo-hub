import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Seychelles.svg';

export function Seychelles(props: TProps) {
  return (
    <Icon {...props} name="Seychelles">
      <SVG />
    </Icon>
  );
}
