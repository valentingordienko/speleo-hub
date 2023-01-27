import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Gambia.svg';

export function Gambia(props: TBaseProps) {
  return (
    <Icon {...props} name="Gambia">
      <SVG />
    </Icon>
  );
}
