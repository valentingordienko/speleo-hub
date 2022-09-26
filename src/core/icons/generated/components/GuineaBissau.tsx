import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GuineaBissau.svg';

export function GuineaBissau(props: TProps) {
  return (
    <Icon {...props} name="GuineaBissau">
      <SVG />
    </Icon>
  );
}
