import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Cameroon.svg';

export function Cameroon(props: TProps) {
  return (
    <Icon {...props} name="Cameroon">
      <SVG />
    </Icon>
  );
}
