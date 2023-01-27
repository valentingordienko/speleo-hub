import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Djibouti.svg';

export function Djibouti(props: TBaseProps) {
  return (
    <Icon {...props} name="Djibouti">
      <SVG />
    </Icon>
  );
}
