import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Kyrgyzstan.svg';

export function Kyrgyzstan(props: TBaseProps) {
  return (
    <Icon {...props} name="Kyrgyzstan">
      <SVG />
    </Icon>
  );
}
