import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Botswana.svg';

export function Botswana(props: TBaseProps) {
  return (
    <Icon {...props} name="Botswana">
      <SVG />
    </Icon>
  );
}
