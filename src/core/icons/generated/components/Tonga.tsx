import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Tonga.svg';

export function Tonga(props: TProps) {
  return (
    <Icon {...props} name="Tonga">
      <SVG />
    </Icon>
  );
}
