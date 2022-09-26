import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Brunei.svg';

export function Brunei(props: TProps) {
  return (
    <Icon {...props} name="Brunei">
      <SVG />
    </Icon>
  );
}
