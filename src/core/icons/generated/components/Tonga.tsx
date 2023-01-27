import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Tonga.svg';

export function Tonga(props: TBaseProps) {
  return (
    <Icon {...props} name="Tonga">
      <SVG />
    </Icon>
  );
}
