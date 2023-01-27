import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Brunei.svg';

export function Brunei(props: TBaseProps) {
  return (
    <Icon {...props} name="Brunei">
      <SVG />
    </Icon>
  );
}
