import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Seychelles.svg';

export function Seychelles(props: TBaseProps) {
  return (
    <Icon {...props} name="Seychelles">
      <SVG />
    </Icon>
  );
}
