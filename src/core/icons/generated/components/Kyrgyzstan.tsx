import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Kyrgyzstan.svg';

export function Kyrgyzstan(props: TProps) {
  return (
    <Icon {...props} name="Kyrgyzstan">
      <SVG />
    </Icon>
  );
}
