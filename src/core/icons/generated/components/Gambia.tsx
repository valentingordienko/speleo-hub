import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Gambia.svg';

export function Gambia(props: TProps) {
  return (
    <Icon {...props} name="Gambia">
      <SVG />
    </Icon>
  );
}
