import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Botswana.svg';

export function Botswana(props: TProps) {
  return (
    <Icon {...props} name="Botswana">
      <SVG />
    </Icon>
  );
}
