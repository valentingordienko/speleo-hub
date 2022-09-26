import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Tokelau.svg';

export function Tokelau(props: TProps) {
  return (
    <Icon {...props} name="Tokelau">
      <SVG />
    </Icon>
  );
}
