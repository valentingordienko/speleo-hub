import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Eritrea.svg';

export function Eritrea(props: TProps) {
  return (
    <Icon {...props} name="Eritrea">
      <SVG />
    </Icon>
  );
}
